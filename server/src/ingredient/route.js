const express = require("express");
const router = express.Router();

const ingredientController = require("./controller");
const controller = new ingredientController();

router.get("/", controller.getIngredients);
router.get("/:id", controller.getIngredientById);
router.post("/", controller.addIngredient);
router.put("/:id", controller.updateIngredientById);
router.delete("/:id", controller.deleteIngredientById);

module.exports = router;
