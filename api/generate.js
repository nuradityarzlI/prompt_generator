// Isi dari file: api/generate.js (Versi Groq)

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { prompt } = request.body;
    // Ambil API Key Groq dari Environment Variable
    const groqApiKey = process.env.GROQ_API_KEY;

    if (!groqApiKey) {
      console.error("GROQ_API_KEY is not configured.");
      return response.status(500).json({ message: 'Server configuration error.' });
    }
    if (!prompt) {
      return response.status(400).json({ message: 'Prompt is required.' });
    }
    
    // Endpoint API Groq
    const apiUrl = 'https://api.groq.com/openai/v4/chat/completions';

    const payload = {
      // Gunakan model Llama 3 yang sangat cepat di Groq
      model: "llama3-8b-8192",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      // Minta Groq untuk selalu merespon dalam format JSON
      response_format: { "type": "json_object" }
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
      return response.status(groqResponse.status).json({ message: 'Error from Groq API', details: errorBody });
    }

    const data = await groqResponse.json();
    const generatedText = data.choices[0]?.message?.content || null;

    if (!generatedText) {
      return response.status(500).json({ message: 'Could not parse generated text from Groq response.' });
    }

    // Buat strukturnya mirip respons Google agar frontend tidak perlu diubah
    const mockGoogleResponse = {
        candidates: [{
            content: {
                parts: [{
                    text: generatedText
                }]
            }
        }]
    };

    return response.status(200).json(mockGoogleResponse);

  } catch (error) {
    console.error("Internal Server Error:", error);
    return response.status(500).json({ message: 'An internal server error occurred.' });
  }
}
