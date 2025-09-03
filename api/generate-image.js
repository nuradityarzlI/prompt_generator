const fetch = require('node-fetch');

// Fungsi untuk memantau status generasi gambar di Leonardo.Ai
const pollForResult = async (generationId, apiKey) => {
    const POLL_URL = `https://cloud.leonardo.ai/api/rest/v1/generations/${generationId}`;
    while (true) {
        const response = await fetch(POLL_URL, {
            method: 'GET',
            headers: { 'authorization': `Bearer ${apiKey}` }
        });
        const data = await response.json();
        
        const job = data.generations_by_pk;
        if (job.status === 'COMPLETE') {
            return job.generated_images; // Mengembalikan array gambar
        } else if (job.status === 'FAILED') {
            throw new Error('Image generation failed at Leonardo');
        }
        
        await new Promise(resolve => setTimeout(resolve, 4000)); // Tunggu 4 detik
    }
};

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { prompt } = request.body;
        const leonardoApiKey = process.env.LEONARDO_API_KEY;

        if (!leonardoApiKey) {
            console.error("LEONARDO_API_KEY is not configured.");
            return response.status(500).json({ message: 'Server configuration error.' });
        }
        if (!prompt) {
            return response.status(400).json({ message: 'Prompt is required.' });
        }

        const GENERATE_URL = 'https://cloud.leonardo.ai/api/rest/v1/generations';
        
        // 1. Memulai proses generasi
        const startResponse = await fetch(GENERATE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${leonardoApiKey}`
            },
            body: JSON.stringify({
                prompt: prompt,
                modelId: "6bef9f1b-29cb-40c7-b9df-32b51c1f67d3", // Leonardo Diffusion XL
                height: 768,
                width: 768,
                num_images: 1,
                sd_version: "v2"
            })
        });

        const startData = await startResponse.json();
        const generationId = startData.sdGenerationJob?.generationId;

        if (!generationId) {
            console.error("Leonardo API Error:", startData);
            throw new Error("Failed to start generation job");
        }

        // 2. Memantau hasil
        const generatedImages = await pollForResult(generationId, leonardoApiKey);
        
        if (generatedImages && generatedImages.length > 0) {
            // Kirim kembali URL gambar pertama yang berhasil dibuat
            return response.status(200).json({ imageUrl: generatedImages[0].url });
        } else {
            throw new Error("No images were generated");
        }

    } catch (error) {
        console.error("Internal Server Error:", error);
        return response.status(500).json({ message: error.message || 'An internal server error occurred.' });
    }
}