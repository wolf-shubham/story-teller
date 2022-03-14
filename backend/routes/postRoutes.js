const route = require('express')()
const { createPostController, likeUnlikePost, myposts, deletepost, followingUsersPosts, addComment } = require('../controllers/postControllers')
const { isAuthenticated } = require('../middlewares/authMiddleware')


route.post('/createpost', isAuthenticated, createPostController)

route.get('/like/:id', isAuthenticated, likeUnlikePost)

route.get('/myposts', isAuthenticated, myposts)

route.post('/addcomment/:id', isAuthenticated, addComment)

route.delete('/deletepost/:id', isAuthenticated, deletepost)

route.get('/followingposts', isAuthenticated, followingUsersPosts)

module.exports = route