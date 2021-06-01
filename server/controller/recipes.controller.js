const db = require('../db');

class RecipesController {
    async createRecipe(req, res) {
        const {title, description, isVegeterian, isBeverage, howToCook, ingridients, imgLink, videoLink, authorFullName, userId} = req.body
        const newRecipe = await db.query(`
             INSERT INTO "recipe" (title, description, is_vegeterian, is_beverage, how_to_cook, ingridients, img_link, video_link, author_full_name, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNINg *`,
            [title, description, isVegeterian, isBeverage, howToCook,ingridients,imgLink, videoLink, authorFullName, userId])
        res.json(newRecipe.rows[0])
    }
    async getRecipeByUser(req, res) {
        const id = req.query.id
        const recipes = await db.query(`SELECT * FROM "recipe" WHERE user_id = $1`, [id])
        res.json(recipes.rows)
    }
    async getAllRecipes( req, res ) {
        const recipes = await db.query(`SELECT * FROM "recipe"`)
        res.json(recipes.rows)

    }
    async deleteRecipe( req, res ) {
        const id = req.params.id
        const recipe = await db.query(`DELETE FROM "recipe" WHERE id = $1`, [id])
        res.json(recipe.rows[0])
    }

}
module.exports = new RecipesController()
