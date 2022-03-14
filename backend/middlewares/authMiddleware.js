const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.isAuthenticated = async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({ message: 'Plz Login first.' })
            }
            const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY)
            // console.log(decoded)
            req.user = await User.findById(decoded._id).select('-password')
            // console.log(typeof (req.user));
            // console.log(req.user);
            next()
        } catch (error) {
            return res.status(404).json({ message: 'error in token' })
        }
    }
} 