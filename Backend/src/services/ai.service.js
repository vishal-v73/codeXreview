const { GoogleGenerativeAI } = require("@google/generative-ai");

const ai = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

function formatPrompt(userInput) {
    return `
    Instruction: 
    1. First, analyze the given code and provide its time complexity and space complexity.
    2. If the code can be optimized, follow this systematic approach:
       - Explain the current approach and its drawbacks.
       - Provide an optimized approach with reasoning.
       - Finally, give the optimized code with proper explanations in colorful and impresive way.
       - also ask for another solution in diffrent langage
    
    Code:
    ${userInput}
    `;
}

async function generateContent(userInput) {
    try {
        const formattedPrompt = formatPrompt(userInput);
        const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(formattedPrompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Error generating content:", error);
        return "Error in AI response";
    }
}

module.exports = { generateContent };
