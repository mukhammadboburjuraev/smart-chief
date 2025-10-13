import resipeService from "../service/recipe.service.js";

class recipeController {
  async getRecipes(req, res) {
    try {
      const { ingredients } = req.body;
      if (!ingredients || !Array.isArray(ingredients)) {
        return res
          .status(400)
          .json({ error: error.message || "Invalid ingredients format" });
      }
      const recipes = await resipeService.getRecipes(ingredients);
      res.json(recipes);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message || "Server Error" });
    }
  }
}

export default new recipeController();
