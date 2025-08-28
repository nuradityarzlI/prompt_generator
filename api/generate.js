// Isi dari file: api/generate.js

// Handler default untuk Vercel Serverless Function
export default async function handler(request, response) {
  // 1. Hanya izinkan metode POST
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // 2. Ambil data prompt dari permintaan yang dikirim frontend
    const { prompt, generationConfig } = request.body;

    // 3. Ambil API Key secara aman dari Environment Variables di Vercel
    const apiKey = process.env.GOOGLE_API_KEY;

    // Lakukan validasi dasar
    if (!apiKey) {
      // Jangan pernah mengekspos detail error internal di produksi
      console.error("GOOGLE_API_KEY is not configured.");
      return response.status(500).json({ message: 'Server configuration error.' });
    }
    if (!prompt) {
      return response.status(400).json({ message: 'Prompt is required.' });
    }
    
    // 4. Siapkan URL dan payload untuk dikirim ke Google AI API
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      // Gabungkan generationConfig jika ada
      ...(generationConfig && Object.keys(generationConfig).length > 0 && { generationConfig }),
    };

    // 5. Kirim permintaan ke Google AI dari server
    const googleResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // 6. Tangani respons dari Google
    if (!googleResponse.ok) {
      // Jika Google mengembalikan error, teruskan informasinya untuk debugging
      const errorBody = await googleResponse.text();
      console.error("Google API Error:", errorBody);
      return response.status(googleResponse.status).json({ message: 'Error from Google AI API', details: errorBody });
    }

    const data = await googleResponse.json();
    
    // 7. Kirim kembali respons yang sukses ke frontend Anda
    return response.status(200).json(data);

  } catch (error) {
    // Tangani error tak terduga
    console.error("Internal Server Error:", error);
    return response.status(500).json({ message: 'An internal server error occurred.' });
  }
}