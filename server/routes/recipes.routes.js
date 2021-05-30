const Router = require('express');

const router = new Router();

const recipeController = require('../controller/recipes.controller');

router.post('/recipes', recipeController.createRecipe)
router.get('/recipes', recipeController.getRecipeByUser)

module.exports = router;
