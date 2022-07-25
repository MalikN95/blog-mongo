const express = require('express')
const controller = require('../controllers/user-posts.controllers')
const router = express.Router()
const auth = require('../middleware/auth')


router.get('/', auth, controller.userPosts)
router.delete('/', auth, controller.deletePosts)

module.exports = router