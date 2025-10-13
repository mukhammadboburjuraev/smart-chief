import React, { useState } from "react";
import Response from "./Response";
import PromtInput from "./PromtInput";
import { Box } from "@chakra-ui/react";
import axios from "axios";

function Home() {
  const backendUrl = "http://localhost:5001/api/recipes/";
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingredientsList = ingredients.split(",").map((item) => item.trim());
    try {
      const response = await axios.post(`${backendUrl}`, {
        ingredients: ingredientsList,
      });

      const allTexts = response.data.candidates
        .map((item) => item.content.parts.map((p) => p.text))
        .flat();
      setRecipes(allTexts);
      console.log(backendUrl);
      console.log(allTexts);
      setIngredients("");
    } catch (error) {
      console.log({ message: "error in input promt ", error });
    }
  };
  return (
    <>
      <Box
        display="flex"
        width="100vw"
        height="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Response recipes={recipes} />
        <PromtInput
          ingredients={ingredients}
          setIngredients={setIngredients}
          handleSubmit={handleSubmit}
        />
      </Box>
    </>
  );
}

export default Home;
