const express = require('express');
const router = express.Router();

module.exports = ({
    getUserByEmail,
}) => {
 
    router.post('/', (req, res) => {

        const {
            email,
            password
        } = req.body;

        getUserByEmail(email)
            .then(user => {
                if(!user) {
                  res.status(400)
                  res.json({
                    msg: 'Invalid email'
                   })
                } else if(user && password === user['password']) {
                  //sets cookie session
                  req.session.user_id = user['id'];
                  res.json({
                    msg: 'Logged in'
                   })
                } else {
                  res.status(400)
                  res.json({
                    msg: 'Invalid password'
                   });
                }
            })
            .then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));

    })

    return router;
};