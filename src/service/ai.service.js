const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: contents,
    config: {
      systemInstruction: `You are expert in generating captions for images.
      You generate dingle caption for the image.
      Your caption should be short and concise.
      You use hashtags  and emojis in the caption.
      Create two lines caption.`,
    },
  });
  return response.text;
}

module.exports = generateCaption;
