export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { prompt } = request.body;
        const groqApiKey = process.env.GROQ_API_KEY;

        if (!groqApiKey) {
            console.error("GROQ_API_KEY is not configured on Vercel.");
            return response.status(500).json({ message: 'Server configuration error.' });
        }
        if (!prompt) {
            return response.status(400).json({ message: 'Prompt is required.' });
        }
        
        const apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
        
        const payload = {
            model: "openai/gpt-oss-120b", // Model yang lebih baik dan stabil
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7
        };

        const groqResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${groqApiKey}`
            },
            body: JSON.stringify(payload),
        });

        if (!groqResponse.ok) {
            const errorBody = await groqResponse.text();
            console.error("Groq API Error:", errorBody);
            return response.status(groqResponse.status).json({ message: `Error from Groq API: ${errorBody}` });
        }

        const data = await groqResponse.json();
        const generatedText = data.choices[0]?.message?.content || null;

        if (!generatedText) {
            return response.status(500).json({ message: 'Could not parse generated text from Groq response.' });
        }

        // Struktur respons ini sudah benar untuk frontend Anda
        return response.status(200).json({
            candidates: [{
                content: {
                    parts: [{ text: generatedText }]
                }
            }]
        });

    } catch (error) {
        console.error("Internal Server Error:", error);
        return response.status(500).json({ message: 'An internal server error occurred.' });
    }
}
