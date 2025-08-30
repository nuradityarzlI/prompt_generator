// File: api/analyze.js (Versi Perbaikan)

module.exports = async (req, res) => {
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

        // Di lingkungan Node.js, cara terbaik mengubah base64 adalah menggunakan Buffer
        const imageBuffer = Buffer.from(promptWithImage.image.data, 'base64');
        
        const response = await fetch(
            "https://api-inference.huggingface.co/models/llava-hf/llava-1.5-7b-hf",
            {
                headers: { 
                    "Authorization": `Bearer ${hfToken}`,
                    "Content-Type": promptWithImage.image.mimeType,
                },
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
        const generatedText = result[0]?.generated_text || "";
        
        // Ekstrak jawaban bersih dari output LLaVA
        const answer = generatedText.split('[/INST]')[1]?.trim() || "Could not parse the answer from model response.";
        
        const finalResponse = {
            candidates: [{ content: { parts: [{ text: answer }] } }]
        };

        return res.status(200).json(finalResponse);

    } catch (error) {
        console.error('Internal Server Error in /api/analyze:', error);
        return res.status(500).json({ message: 'An internal error occurred.', details: error.message });
    }
};
