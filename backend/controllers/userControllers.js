const bcrypt = require('bcrypt')
const Post = require('../models/Post')
const User = require('../models/User')
// const { generateToken } = require('../utils/generateToken')


exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: 'user not found. try register first.' })
        }
        const comparePassword = await bcrypt.compare(password, user.password)
        if (!comparePassword) {
            return res.status(404).json({ message: 'invalid email or password.' })
        }
        const token = await user.generateToken()
        return res.status(200).json({ user, token, message: 'login successful.' })

    } catch (error) {
        return res.status(500).json({ message: 'network error' })
    }
}


exports.registerController = async (req, res) => {
    try {
        const { name, email, password, displaypic } = req.body
        const checkEmail = await User.findOne({ email })
        if (checkEmail) {
            return res.status(401).json({ message: 'user with that email already exists.' })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await new User({
            name,
            email,
            password: hashedPassword,
            displaypic
        }).save()
        const token = await newUser.generateToken()

        return res.status(200).json({ message: 'user registered successfully', newUser, token })
    } catch (error) {
        return res.status(400).json({ message: 'user register failed.' })
    }
}


exports.followUnfollowUser = async (req, res) => {
    try {
        const userToFollow = await User.findById(req.params.id)
        const loggedUser = await User.findById(req.user._id)

        if (loggedUser.following.includes(req.params.id)) {
            const index = await loggedUser.following.indexOf(userToFollow._id)
            loggedUser.following.splice(index, 1)

            const indexoffollower = await userToFollow.followers.indexOf(loggedUser._id)
            userToFollow.followers.splice(indexoffollower, 1)

            await loggedUser.save()
            await userToFollow.save()

            return res.json({ message: 'user unfollowed' })
        } else {
            loggedUser.following.push(userToFollow._id)
            userToFollow.followers.push(loggedUser._id)

            await loggedUser.save()
            await userToFollow.save()

            return res.json({ message: 'user followed' })
        }

    } catch (error) {
        return res.status(500).json({ message: 'network error' })
    }
}


exports.myProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('userposts')
        return res.status(200).json({ message: 'my profile', user })
    } catch (error) {
        return res.status(500).json({ message: 'network error' })
    }
}


exports.getUsersProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('userposts')
        return res.status(200).json({ message: 'profile of users', user })
    } catch (error) {
        return res.status(500).json({ message: 'network error' })
    }
}


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).populate('userposts')
        return res.status(200).json({ message: 'all users profile', users })
    } catch (error) {
        return res.status(500).json({ message: 'network error' })
    }
}


exports.deleteMyProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        const posts = user.userposts
        const followers = user.followers
        const following = user.following
        const userId = user._id

        await user.remove()

        for (let i = 0; i < posts.length; i++) {
            const post = await Post.findById(posts[i])
            await post.remove()
        }

        for (let i = 0; i < followers.length; i++) {
            const follower = await User.findById(followers[i])
            const index = await follower.following.indexOf(userId)
            follower.following.splice(index, 1)
            await follower.save()
        }

        for (let i = 0; i < following.length; i++) {
            const followingDelete = await User.findById(following[i])
            const index = await followingDelete.followers.indexOf(userId)
            followingDelete.followers.splice(index, 1)
            await followingDelete.save()
        }

        return res.status(200).json({ message: 'user profile deleted' })

    } catch (error) {
        return res.status(500).json({ message: 'network error' })
    }
}