
const Router = require('express');

const router = new Router();

const recipesController = require('../controller/recipes.controller');

router.post('/recipe', recipesController.createRecipe)
router.get('/recipe/by', recipesController.getRecipeByUser)
router.get('/recipe', recipesController.getAllRecipes)
router.get('/recipe/:id', recipesController.getId)
router.delete('/recipe/:id', recipesController.deleteRecipe)


module.exports = router;
