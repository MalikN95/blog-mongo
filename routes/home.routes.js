const express = require('express')
const controller = require('../controllers/home.controllers')
const router = express.Router()
const auth = require('../middleware/auth')
const fileMiddleware = require('../middleware/file')

router.get('/', controller.homePage)
router.get('/post/:id', controller.postPage)
router.get('/edit/:id', auth, controller.postUpdatePage)
router.post('/update', auth, fileMiddleware.single('media'), controller.postUpdate)

module.exports = router