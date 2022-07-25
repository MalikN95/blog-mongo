const Post = require('../models/Post')

module.exports.userPosts = async function(req, res){
    const posts = await Post.find({user: req.session.user._id})
    .populate('user')
    .sort({date: -1}).lean()
    res.render('index', {
        userPost: true,
        title: 'Мои посты',
        posts
    })
}

module.exports.deletePosts = async function(req, res){
    const posts = await Post.findByIdAndDelete(req.body.postId).populate('user').lean()
    res.json(posts._id)
}