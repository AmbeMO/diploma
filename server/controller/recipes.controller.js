const db = require('../db/db');

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
    async getId( req, res ) {
        const id = req.params.id
        const recipe = await db.query(`SELECT * FROM "recipe" WHERE id = $1`, [id])
        if(recipe.rowCount === 0){
            res.sendStatus(404)
        }
        res.json(recipe.rows)
    }
    async getAllRecipes( req, res ) {
        const recipes = await db.query(`SELECT * FROM "recipe"`)
        res.json(recipes.rows)

    }
    async updateRecipe( req, res ) {
        const {id, title, description, howToCook, ingridients, authorFullName} = req.body
        const recipe = await db.query(`
        UPDATE "recipe" SET title = $1, description = $2, how_to_cook = $3, ingridients = $4, author_full_name = $5 WHERE id = $6 RETURNING *`,
            [title, description, howToCook, ingridients, authorFullName, id])
        res.json(recipe.rows[0])
        console.log('qwe', recipe)
    }
    async deleteRecipe( req, res ) {
        const id = req.params.id
        const recipe = await db.query(`DELETE FROM "recipe" WHERE id = $1`, [id])
        res.json(recipe.rows[0])
    }

}
module.exports = new RecipesController()
