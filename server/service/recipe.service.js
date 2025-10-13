import axios from "axios";

class RecipeService {
  async getRecipes(ingredients) {
    const apiKey = process.env.API_KEY;
    try {
      console.log(ingredients);
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text: `Предложи блюда, которые можно приготовить из: ${ingredients.join(
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
      const answer = response.data;
      return answer;
    } catch (error) {
      console.error(error.message, { message: "Ошибка при запросе к ИИ" });
    }
  }
}

export default new RecipeService();
