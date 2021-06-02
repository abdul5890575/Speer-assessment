const express = require('express');
const router = express.Router();
const {} = require('../helpers/dataHelpers');

module.exports = ({ 
    getUserByEmail,
    addUser
}) => {
    /* GET users listing. */


    router.post('/', (req, res) => {

        const {
            first_name,
            last_name,
            email,
            password
        } = req.body;

        if (req.body.email === '' || req.body.password === '' || req.body.username === '') {
            res.status(400)
            res.json({
                msg: 'Username, Email or Password empty'
            })
        } else {
            getUserByEmail(email)
            .then(user => {
                if (user) {
                    res.status(400)
                    res.json({
                        msg: 'Sorry, a user account with this email already exists'
                    });
                } else {
                    return addUser(first_name, last_name, email, password)
                }
            })
            .then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));
        }
    })

    return router;
};