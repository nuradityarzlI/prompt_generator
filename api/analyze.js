// File: api/analyze.js
// Endpoint ini HANYA untuk fitur "Analyze Product from Image" menggunakan LLaVA via Hugging Face.

function base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { promptWithImage } = req.body;
        const hfToken = process.env.HUGGINGFACE_TOKEN;
        
        if (!hfToken) {
            return res.status(500).json({ message: "Server configuration error: HUGGINGFACE_TOKEN is missing." });
        }
        if (!promptWithImage || !promptWithImage.image) {
            return res.status(400).json({ message: "Image data is required." });
        }

        const imageBuffer = base64ToArrayBuffer(promptWithImage.image.data);
        
        const response = await fetch(
            "https://api-inference.huggingface.co/models/llava-hf/llava-1.5-7b-hf",
            {
                headers: { "Authorization": `Bearer ${hfToken}` },
                method: "POST",
                body: imageBuffer,
            }
        );

        if (!response.ok) {
            const errorBody = await response.text();
            if (response.status === 503 && errorBody.includes("is currently loading")) {
                 return res.status(503).json({ message: "Model is currently loading, please try again in a moment." });
            }
            return res.status(response.status).json({ message: "Error from Hugging Face API.", details: errorBody });
        }

        const result = await response.json();
        // LLaVA mengembalikan seluruh prompt, kita ekstrak jawabannya saja
        const answer = result[0]?.generated_text.split('<|im_end|>')[1]?.trim() || "Could not parse answer.";
        
        const finalResponse = {
            candidates: [{ content: { parts: [{ text: answer }] } }]
        };

        return res.status(200).json(finalResponse);

    } catch (error) {
        console.error('Internal Server Error in /api/analyze:', error);
        return res.status(500).json({ message: 'An internal error occurred.', details: error.message });
    }
}