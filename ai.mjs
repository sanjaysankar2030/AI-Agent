import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI("AIzaSyBhz2NXUcXxdOTHCTGBZgreg4_WS-9iUK8");

export async function run_ai() {
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" }); // or "gemini-pro"

    const result = await model.generateContent("Generate a detailed roadmap for building a AI agent using Rag and lang graph . Make sure that there is no extra content that it included in your response only the plan and overview");
    const response =  result.response;
    return response.text();

    // console.log(response.text());
}
run_ai();

// main(); // Do not use `await main()` at top level unless using type: "module"
