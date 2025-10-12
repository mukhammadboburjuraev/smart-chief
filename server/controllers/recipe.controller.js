import resipeService from "../service/recipe.service.js";

class recipeController {
  async getRecipes(req, res) {
    try {
      if (!ingredients || !Array.isArray(ingredients)) {
        return res
          .status(400)
          .json({ error: "Ингредиенты должны быть переданы в виде массива" });
      }
      const recipes = await resipeService.getRecipes(ingredients);
      res.json(recipes);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Ошибка при запросе к ИИ" });
    }
  }
}

export default new recipeController();
