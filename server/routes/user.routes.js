const Router = require('express');

const router = new Router();

const userController = require('../controller/user.controller');

router.post('/signup', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
router.put('/user', userController.updateUsers)
router.delete('/user/:id', userController.deleteUser)


module.exports = router;
