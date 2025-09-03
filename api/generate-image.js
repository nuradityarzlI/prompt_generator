const fetch = require('node-fetch');

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }
    try {
        const { prompt } = request.body;
        // Ambil API key dari header yang dikirim oleh frontend
        const openaiApiKey = request.headers['authorization']?.split(' ')[1];

        if (!openaiApiKey) {
            return response.status(401).json({ message: 'OpenAI API Key is missing from request.' });
        }
        if (!prompt) {
            return response.status(400).json({ message: 'Prompt is required.' });
        }

        const apiUrl = 'https://api.openai.com/v1/images/generations';
        const payload = { model: "dall-e-3", prompt, n: 1, size: "1024x1024", response_format: "url" };

        const openaiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${openaiApiKey}` },
            body: JSON.stringify(payload),
        });
        
        const data = await openaiResponse.json();
        if (!openaiResponse.ok) {
            throw new Error(data.error?.message || "Failed to generate image with OpenAI");
        }
        
        const imageUrl = data.data[0]?.url;
        return response.status(200).json({ imageUrl });
    } catch (error) {
        console.error("Error in generate-image:", error);
        return response.status(500).json({ message: error.message });
    }
}
