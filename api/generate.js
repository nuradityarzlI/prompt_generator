// Isi lengkap untuk file: api/generate.js
// Menggunakan API dari Groq dengan endpoint yang sudah diperbaiki.

export default async function handler(request, response) {
  // Hanya izinkan metode POST untuk keamanan
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Ambil data prompt dari permintaan yang dikirim frontend
    const { prompt, generationConfig } = request.body;
    
    // Ambil API Key Groq secara aman dari Environment Variable di Vercel
    const groqApiKey = process.env.GROQ_API_KEY;

    // Lakukan validasi dasar
    if (!groqApiKey) {
      console.error("GROQ_API_KEY is not configured on Vercel.");
      return response.status(500).json({ message: 'Server configuration error.' });
    }
    if (!prompt) {
      return response.status(400).json({ message: 'Prompt is required.' });
    }
    
    // URL endpoint API Groq yang sudah BENAR (menggunakan v1)
    const apiUrl = 'https://api.groq.com/openai/v1/chat/completions';

    const payload = {
      // Gunakan model Llama 3 yang sangat cepat di Groq
      model: "llama3-8b-8192",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      // Minta Groq untuk merespon dalam format JSON jika memungkinkan
      // (beberapa model/prompt mungkin tidak selalu patuh)
      ...(generationConfig?.responseMimeType === "application/json" && { response_format: { "type": "json_object" } })
    };

    // Kirim permintaan ke server Groq
    const groqResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${groqApiKey}`
      },
      body: JSON.stringify(payload),
    });

    // Tangani jika Groq mengembalikan error
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
    const finalResponse = {
        candidates: [{
            content: {
                parts: [{
                    text: generatedText
                }]
            }
        }]
    };

    // Kirim kembali respons yang sukses ke frontend Anda
    return response.status(200).json(finalResponse);

  } catch (error) {
    // Tangani error tak terduga di server
    console.error("Internal Server Error:", error);
    return response.status(500).json({ message: 'An internal server error occurred.' });
  }
}
