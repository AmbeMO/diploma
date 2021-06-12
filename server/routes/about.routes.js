const Router = require('express');

const router = new Router();

const aboutController = require('../controller/about.controller')

router.post('/about', aboutController.createAdvice)
router.get('/about', aboutController.getAdvices)



module.exports = router;
