// File: api/suggest.js
// Endpoint ini HANYA untuk fitur "Suggest with AI" menggunakan Llama 3 via Groq.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { prompt } = req.body;
    const groqApiKey = process.env.GROQ_API_KEY;

    if (!groqApiKey) {
      return res.status(500).json({ message: 'Server configuration error: GROQ_API_KEY is missing.' });
    }
    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required.' });
    }
    
    const apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
    const payload = {
      model: "llama3-8b-8192",
      messages: [{ role: "user", content: prompt }],
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
      return res.status(groqResponse.status).json({ message: 'Error from Groq API', details: errorBody });
    }

    const data = await groqResponse.json();
    const generatedText = data.choices[0]?.message?.content || null;

    if (!generatedText) {
      return res.status(500).json({ message: 'Could not parse text from Groq response.' });
    }

    const finalResponse = {
        candidates: [{ content: { parts: [{ text: generatedText }] } }]
    };

    return res.status(200).json(finalResponse);

  } catch (error) {
    console.error("Internal Server Error in /api/suggest:", error);
    return res.status(500).json({ message: 'An internal server error occurred.' });
  }
}