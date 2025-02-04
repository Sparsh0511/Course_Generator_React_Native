const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

    export const GeneraterTopicsAiModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Learn Python: : As your are coaching teacher\n- User want to learn about the topic\n- Generate 5-7 Course title for study (Short)\n- Make sure it is releated to description\n- Output will be ARRAY of String in JSON FORMAT only\n- Do not add any plain text in output,\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course_titles\": [\n    \"Python Basics: A Gentle Intro\",\n    \"Python Fundamentals: Data & Logic\",\n    \"Python: Control Flow & Structures\",\n     \"Python: Functions and Modules\",\n    \"Python: Working with Files\",\n     \"Python: Object Oriented Concepts\",\n     \"Python: Intro to Data Handling\"\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
