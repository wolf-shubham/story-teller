const route = require('express')()
const { loginController, registerController, followUnfollowUser, deleteMyProfile, myProfile, getUsersProfile, getAllUsers } = require('../controllers/userControllers')
const { isAuthenticated } = require('../middlewares/authMiddleware')


route.post('/login', loginController)

route.post('/register', registerController)

route.get('/followuser/:id', isAuthenticated, followUnfollowUser)

route.get('/myprofile', isAuthenticated, myProfile)

route.get('/userprofile/:id', isAuthenticated, getUsersProfile)

route.get('/allusers', isAuthenticated, getAllUsers)

route.delete('/deleteprofile', isAuthenticated, deleteMyProfile)

module.exports = route