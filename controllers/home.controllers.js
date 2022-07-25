const Post = require('../models/Post')

module.exports.homePage = async function(req, res){
    const posts = await Post.find().populate('user').sort({date: -1}).lean()
    res.render('index', {
        isHome: true,
        title: 'Главная страница',
        posts
    })
}

module.exports.postPage = async function(req, res){
    const post = await Post.findById(req.params.id).populate('user').lean()
    res.render('post', {
        ispost: true,
        title: post.title,
        post
    })
}

module.exports.postUpdatePage = async function(req, res){
    const user = req.session.user
    const post = await Post.findById(req.params.id).populate('user').lean()
    res.render('update-post', {
        ispost: true,
        title: post.title,
        post,
        user
    })
}

module.exports.postUpdate = async function(req, res){
    const {id} = req.body
    delete req.body.id
    const post = await Post.findByIdAndUpdate(id, req.body).lean()
    if(req.file){
        const img = {
            titleImg: req.file.path
        }
        const post = await Post.findByIdAndUpdate(id, img).lean()
    }
    res.redirect('/user-posts')
}