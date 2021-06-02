const express = require('express');
const router = express.Router();
const {} = require('../helpers/dataHelpers');

module.exports = ({ 
    getUserPosts
}) => {
    /* GET users listing. */

    router.get('/', (req, res) => {
        // set session with postman to get the proper data without a frontend
        let user_id = req.session.user_id      
        getUserPosts(user_id)
        .then(data => {
            res.json({data});
        })
        .catch(err => res.json({
            error: err.message
        }));
    })

    return router;
};