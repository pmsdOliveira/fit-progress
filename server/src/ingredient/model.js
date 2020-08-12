const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  description: { type: String, required: true },
  brand: { type: String, required: true },
  weight: { type: Number, required: true },
  energy: { type: Number, default: 0 },
  fat: { type: Number, default: 0 },
  satFat: { type: Number, default: 0 },
  carbs: { type: Number, default: 0 },
  sugars: { type: Number, default: 0 },
  fiber: { type: Number, default: 0 },
  proteins: { type: Number, default: 0 },
  salt: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now },
});

ingredientSchema.index(
  { description: 1, brand: 1, weight: 1 },
  { unique: true }
);

module.exports = mongoose.model("Ingredient", ingredientSchema);
