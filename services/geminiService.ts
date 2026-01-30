
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES } from '../constants';

// Fix: Always use named parameter for apiKey and obtain it exclusively from process.env.API_KEY || 'FAKE_API_KEY_FOR_DEVELOPMENT'.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || 'FAKE_API_KEY_FOR_DEVELOPMENT' });

export const getAIResponse = async (userMessage: string) => {
  const context = `
    You are the AI Assistant for ${PERSONAL_INFO.name}. 
    He is a ${PERSONAL_INFO.role}.
    His bio: ${PERSONAL_INFO.bio}.
    His Projects: ${JSON.stringify(PROJECTS.map(p => ({title: p.title, desc: p.description})))}.
    His Experience: ${JSON.stringify(EXPERIENCES.map(e => ({company: e.company, role: e.role}))) }.
    
    Answer questions about S.AKASH's work, experience, and availability professionally and concisely.
    If you don't know the answer, politely suggest they contact him directly at ${PERSONAL_INFO.email}.
    Keep your tone elite, helpful, and confident.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: context,
        temperature: 0.7,
      },
    });

    // Fix: Access .text property directly instead of calling a method or using complex chaining.
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain. Please try again or contact him directly!";
  }
};
