const db = require('../db');

class UserController {
    async createUser(req, res) {
        const {name, lastName, email} = req.body
        const newPerson = await db.query(`
             INSERT INTO "user" (name, last_name, email) VALUES ($1, $2, $3) RETURNINg *`,
            [name, lastName, email])
        res.json(newPerson.rows[0])
    }
    async getUsers( req, res ) {
        const users = await db.query(`SELECT * FROM "user"`)
        res.json(users.rows)

    }
    async getOneUser( req, res ) {
        const id = req.params.id
        const user = await db.query(`SELECT * FROM "user" WHERE id = $1`, [id])
        res.json(user.rows)
    }
    async updateUsers( req, res ) {
        const {id, name, lastName, email} = req.body
        const user = await db.query(`
        UPDATE "user" SET name = $1, last_name = $2, email = $3 WHERE id = $4 RETURNING *`, [name, lastName, email, id])
        res.json(user.rows[0])
    }
    async deleteUser( req, res ) {
        const id = req.params.id
        const user = await db.query(`DELETE FROM "user" WHERE id = $1`, [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()
