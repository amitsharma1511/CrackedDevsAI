import { GoogleGenerativeAI } from '@google/generative-ai';

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

async function callGemini(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const usePrompt = prompt;

  const result = await model.generateContent(usePrompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);

  return text;
}

export default callGemini;
