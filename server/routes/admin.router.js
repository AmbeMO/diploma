const Router = require('express');
const router = new Router();
const adminController = require('../controller/admin.controller')

router.post('/', adminController.login)


module.exports = router
