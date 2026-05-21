// import { HfInference } from "@huggingface/inference";

// const hf = new HfInference(import.meta.env.VITE_HF_API_KEY);

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
// `;

export default async function getRecipe(ingredientsArr) {
  //const ingredientsString = ingredientsArr.join(", ");

  // try {
    /*
    const response = await hf.chatCompletion({
      model: "meta-llama/Llama-3.1-8B-Instruct",

      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },

        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe I'd recommend I make!`,
        },
      ],

      max_tokens: 1024,
    });

    return response.choices[0].message.content;
    */

    // Fallback message for deployment
    return "### 🤖 AI Features Disabled\n\nAI features have been disabled for deployment purposes to protect the API key. If this were running locally, Chef Claude would generate a delicious recipe for you based on your ingredients!";
  // } catch (err) {
  //   console.error(err);
  // }
}
