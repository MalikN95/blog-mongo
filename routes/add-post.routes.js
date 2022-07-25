const express = require('express')
const controller = require('../controllers/add-post.controllers')
const router = express.Router()
const auth = require('../middleware/auth')
const fileMiddleware = require('../middleware/file')

router.get('/', auth, controller.addPostPage)
router.post('/', auth, fileMiddleware.single('media'), controller.addPost)

module.exports = router