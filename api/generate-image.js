// Menggunakan node-fetch untuk Vercel serverless environment
const fetch = require('node-fetch');

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { prompt } = request.body;
        const openaiApiKey = process.env.OPENAI_API_KEY;

        if (!openaiApiKey) {
            console.error("OPENAI_API_KEY is not configured.");
            return response.status(500).json({ message: 'Server configuration error.' });
        }
        if (!prompt) {
            return response.status(400).json({ message: 'Prompt is required.' });
        }

        const API_URL = 'https://api.openai.com/v1/images/generations';

        const payload = {
            model: "dall-e-3", // Model terbaru dan paling kuat
            prompt: prompt,
            n: 1, // Jumlah gambar yang akan dibuat
            size: "1024x1024", // Ukuran gambar
            response_format: "url" // Minta URL gambar, lebih efisien
        };

        const openaiResponse = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openaiApiKey}`
            },
            body: JSON.stringify(payload),
        });
        
        const data = await openaiResponse.json();

        if (!openaiResponse.ok) {
            console.error("OpenAI API Error:", data);
            throw new Error(data.error?.message || "Failed to generate image with OpenAI");
        }
        
        const imageUrl = data.data[0]?.url;

        if (!imageUrl) {
            throw new Error("Could not get image URL from OpenAI response.");
        }
        
        // Kirim kembali URL gambar ke frontend
        return response.status(200).json({ imageUrl: imageUrl });

    } catch (error) {
        console.error("Internal Server Error:", error);
        return response.status(500).json({ message: error.message || 'An internal server error occurred.' });
    }
}
