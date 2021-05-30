const db = require('../db');

class RecipesController {
    async createRecipe(req, res) {
        const {title, description, isVegeterian, isBeverage, userId} = req.body
        const newRecipe = await db.query(`
             INSERT INTO "recipe" (title, description, is_vegeterian, is_beverage, user_id) VALUES ($1, $2, $3, $4, $5) RETURNINg *`,
            [title, description, isVegeterian, isBeverage, userId])
        res.json(newRecipe.rows[0])
    }
    async getRecipeByUser(req, res) {
        const id = req.query.id
        const recipes = await db.query(`SELECT * FROM "recipe" WHERE user_id = $1`, [id])
        res.json(recipes.rows)
    }

}
module.exports = new RecipesController()
