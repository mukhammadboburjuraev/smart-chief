import axios from "axios";

class RecipeService {
  async getRecipes(ingredients) {
    const apiKey = process.env.API_KEY;
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text: `Предложи 3 блюда, которые можно приготовить из: ${ingredients.join(
                    ", "
                  )}.`,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": apiKey,
          },
        }
      );
      console.log("Ответ от API:", response.data);
      const answer =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Нет ответа";
      return answer;
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default new RecipeService();
