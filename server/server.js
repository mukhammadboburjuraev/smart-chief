import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import recipeRoute from "./routes/recipe.route.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("Server is running...");
});

// Routes
app.use("/api/recipes", recipeRoute);

const startApp = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is started in port ${PORT}`);
    });
  } catch (error) {
    console.error("Server error ", error);
  }
};

startApp();
