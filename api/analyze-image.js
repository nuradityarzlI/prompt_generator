// Menggunakan node-fetch untuk Vercel serverless environment
const fetch = require('node-fetch');

// Ekspor fungsi sebagai Vercel Serverless Function
export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        // Ambil data gambar base64 dari frontend
        const { imageBase64 } = request.body;
        const huggingFaceToken = process.env.HUGGINGFACE_API_TOKEN;

        if (!huggingFaceToken) {
            console.error("HUGGINGFACE_API_TOKEN is not configured.");
            return response.status(500).json({ message: 'Server configuration error.' });
        }
        if (!imageBase64) {
            return response.status(400).json({ message: 'Image data (base64) is required.' });
        }
        
        // Endpoint untuk model image captioning populer di Hugging Face
        const apiUrl = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large";
        
        // Hugging Face API untuk gambar menerima data biner, bukan base64
        const imageBuffer = Buffer.from(imageBase64, 'base64');

        const hfResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${huggingFaceToken}`,
                "Content-Type": "application/octet-stream"
            },
            body: imageBuffer,
        });

        const result = await hfResponse.json();

        if (!hfResponse.ok) {
            console.error("Hugging Face API Error:", result);
            throw new Error(result.error || "Failed to analyze image with Hugging Face");
        }
        
        const description = result[0]?.generated_text || "Could not describe the image.";

        // Kirim deskripsi kembali ke frontend
        // Dibuat mirip struktur Google/Groq agar mudah di-parse
        return response.status(200).json({
            candidates: [{
                content: {
                    parts: [{ text: description }]
                }
            }]
        });

    } catch (error) {
        console.error("Internal Server Error:", error);
        return response.status(500).json({ message: 'An internal server error occurred.' });
    }
}