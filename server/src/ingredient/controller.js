const ingredientModel = require("./model");

class Ingredient {}

Ingredient.prototype.getIngredients = (req, res) => {
  ingredientModel.find({}, (err, ingredients) => {
    if (err) {
      res.send(err);
    } else {
      console.log(ingredients);
      res.send(ingredients);
    }
  });
};

Ingredient.prototype.getIngredientById = (req, res) => {
  ingredientModel.findById(req.params.id, (err, ingredient) => {
    if (err) {
      res.send(err);
    } else {
      res.send(ingredient);
    }
  });
};

Ingredient.prototype.addIngredient = (req, res) => {
  const ingredient = new ingredientModel(req.body);
  ingredient.save((err, addedIngredient) => {
    if (err) {
      res.send(err);
    } else {
      res.send(addedIngredient);
    }
  });
};

Ingredient.prototype.updateIngredientById = (req, res) => {
  ingredientModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    (err, updatedIngredient) => {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedIngredient);
      }
    }
  );
};

Ingredient.prototype.deleteIngredientById = (req, res) => {
  ingredientModel.findByIdAndDelete(req.params.id, (err, deletedIngredient) => {
    if (err) {
      res.send(err);
    } else {
      res.send(deletedIngredient);
    }
  });
};

module.exports = Ingredient;
