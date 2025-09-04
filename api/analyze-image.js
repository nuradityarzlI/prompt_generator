// api/analyze-image.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const imageFile = req.body.image; // base64 atau buffer, sesuaikan frontend
    if (!imageFile) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const hfApiKey = process.env.HUGGINGFACE_API_KEY;
    if (!hfApiKey) {
      return res.status(500).json({ message: 'Server configuration error' });
    }

    // Kirim ke Hugging Face API
    const response = await fetch('https://api-inference.huggingface.co/models/nlpconnect/vit-gpt2-image-captioning', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${hfApiKey}`,
        'Content-Type': 'application/octet-stream',
      },
      body: Buffer.from(imageFile, 'base64'), // jika base64
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ message: 'Error from HF API', details: errorText });
    }

    const result = await response.json();
    // result biasanya array dengan caption di result[0].generated_text
    const caption = result[0]?.generated_text || 'No caption generated';

    return res.status(200).json({ caption });

  } catch (error) {
    console.error('Error analyzing image:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
