const fetch = require('node-fetch');

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }
    try {
        const { imageBase64 } = request.body;
        const huggingFaceToken = process.env.HUGGINGFACE_API_TOKEN;
        if (!huggingFaceToken) {
            return response.status(500).json({ message: 'Hugging Face Token not configured by developer.' });
        }
        if (!imageBase64) {
            return response.status(400).json({ message: 'Image data is required.' });
        }
        
        const apiUrl = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large";
        const imageBuffer = Buffer.from(imageBase64, 'base64');

        const hfResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { "Authorization": `Bearer ${huggingFaceToken}`, "Content-Type": "application/octet-stream" },
            body: imageBuffer,
        });

        const result = await hfResponse.json();
        if (!hfResponse.ok) {
            throw new Error(result.error || "Failed to analyze image with Hugging Face");
        }
        const description = result[0]?.generated_text || "Could not describe the image.";
        return response.status(200).json({ description });
    } catch (error) {
        console.error("Error in analyze-image:", error);
        return response.status(500).json({ message: error.message });
    }
}
