const express = require('express');
const router = express.Router();
const {} = require('../helpers/dataHelpers');

module.exports = ({ 
    getUserPosts,
    createPost,
    deletePost,
    updatePost,
    getPostinfo
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

    router.post('/', (req, res) => {
        // set session with postman to get the proper data without a frontend
        let user_id = req.session.user_id   
        const { title , content } = req.body   
        createPost(title , content, user_id)
        .then(data => {
            res.json(data);
        })
        .catch(err => res.json({
            error: err.message
        }));
    })


    router.delete('/:id', (req, res) => {
        // usually id is in the params when you go into nested routes
        let post_id = req.params.id  
        let user_id = req.session.user_id   
        //add userid and post user_id check <----
        getPostinfo(post_id)
        .then(postInfo=>{
            if(postInfo.length > 0 && postInfo[0]['user_id']=== user_id ){
                deletePost(post_id)
                .then(data => {
                res.json(data);
                })
            } else {
                res.json({
                    msg: 'Sorry not your post'
                })
            }
        })
        .catch(err => res.json({
            error: err.message
        }));
    })


    router.put('/:id', (req, res) => {
        // usually id is in the params when you go into nested routes
        let post_id = req.params.id  
        let user_id = req.session.user_id  
        const { title , content } = req.body 
        getPostinfo(post_id)
        .then(postInfo=>{
            if(postInfo.length > 0 && postInfo[0]['user_id']=== user_id ){  
                updatePost(post_id, title, content)
                .then(data => {
                    res.json(data);
                })
            } else {
                res.json({
                    msg: 'Sorry not your post'
                })
            }
        })
        .catch(err => res.json({
            error: err.message
        }));
    })


    return router;
};