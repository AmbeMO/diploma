const db = require('../db/db');

class AboutController {
    async createAdvice(req, res) {
        const {text} = req.body
        const newAdvice = await db.query(`
             INSERT INTO "advice" (text) VALUES ($1) RETURNINg *`,
            [text])
        res.json(newAdvice.rows[0])
    }
    async getAdvices( req, res ) {
        const users = await db.query(`SELECT * FROM "advice"`)
        res.json(users.rows)

    }
}

module.exports = new AboutController()
