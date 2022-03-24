const Post = require("../models/Post")
const User = require("../models/User")


exports.createPostController = async (req, res) => {
    try {
        const newPost = {
            body: req.body.text,
            author: req.user._id
        }
        const post = await Post.create(newPost)
        const user = await User.findById(req.user._id)
        // console.log(post)
        // console.log(user)
        user.userposts.push(post._id)
        await user.save()
        // console.log(post);
        res.status(200).json({ post, message: 'post created successfully' })
    } catch (error) {
        res.status(500).json({ message: 'network failure' })
    }
}


exports.likeUnlikePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const user = await User.findById(req.user._id)

        if (post.likes.includes(req.user._id)) {
            const index = await post.likes.indexOf(req.user._id)
            post.likes.splice(index, 1)
            await post.save()
            return res.status(201).json({ message: 'post unliked' })
        } else {
            post.likes.push(user._id)
            await post.save()
            return res.status(201).json({ message: 'post liked' })
        }

    } catch (error) {
        return res.status(404).json({ message: 'post error' })
    }
}


exports.myposts = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        const posts = []
        for (let i = 0; i < user.userposts.length; i++) {
            const post = await Post.findById(user.userposts[i]).populate(
                "likes comments.commentPostedBy author"
            )
            posts.push(post)
        }
        return res.status(200).json({ posts, message: 'my posts' })
    } catch (error) {
        return res.status(404).json({ message: 'cannot access user posts' })
    }
}


exports.deletepost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(404).json({ message: 'post not found' })
        }
        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'cannot delete other users post' })
        }
        await post.remove()

        const user = await User.findById(req.user._id)
        const index = user.userposts.indexOf(req.params.id)
        user.userposts.splice(index, 1)
        await user.save()

        return res.status(200).json({ message: 'post deleted' })

    } catch (error) {
        return res.status(404).json({ message: 'network error' })
    }
}


exports.followingUsersPosts = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('following', 'userposts')
        const posts = await Post.find({
            author: {
                $in: user.following
            }
        }).populate('author likes comments.commentPostedBy')
        return res.status(200).json({ posts: posts.reverse() })
    } catch (error) {
        return res.status(500).json({ message: 'network error' })
    }
}



exports.addComment = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(404).json({ message: 'post not found' })
        }

        post.comments.push({
            comment: req.body.comment,
            commentPostedBy: req.user._id
        })

        await post.save()
        return res.status(200).json({ message: 'comment added' })
    } catch (error) {
        return res.status(500).json({ message: 'network error' })
    }
}


exports.otherUsersposts = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const posts = []
        for (let i = 0; i < user.userposts.length; i++) {
            const post = await Post.findById(user.userposts[i]).populate(
                "likes comments.commentPostedBy author"
            )
            posts.push(post)
        }
        return res.status(200).json({ posts, message: 'my posts' })
    } catch (error) {
        return res.status(404).json({ message: 'cannot access user posts' })
    }
}