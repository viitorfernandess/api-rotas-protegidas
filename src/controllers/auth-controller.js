const users = require('../models/users')

module.exports = {
    //POST /auth/register
    register: (req, res) => {
        const { name, email, password } = req.body

        if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            return res.status(400).json({ message: 'Invalid fields.' })
        }

        const registeredUser = users.registerUser(name, email, password)
        if(!registeredUser) {
            return res.status(400).json({ message: 'Email already in use.' })
        }

        res.status(201).json(registeredUser)
    },
    
    //POST /auth/register
    login: (req, res) => {

    }
}