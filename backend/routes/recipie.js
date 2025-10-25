const express = require("express");
const {
  getRecipies,
  getRecipie,
  addRecipie,
  editRecipie,
  deleteRecipie
} = require("../controller/recipie");

const router = express.Router();

// ✅ Route to get all recipes
router.get("/", getRecipies);

// ✅ Route to get one recipe by ID
router.get("/:id", getRecipie);

// ✅ Route to add a new recipe
router.post("/", addRecipie);

// ✅ Route to edit a recipe by ID
router.put("/:id", editRecipie);

// ✅ Route to delete a recipe by ID
router.delete("/:id", deleteRecipie);

module.exports = router;
