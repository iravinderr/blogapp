const express = require('express');
const router = express.Router();


// importing controllers
const {createBlog, getBlog} = require('../controllers/blogControls');
const {likeBlog, unlikeBlog} = require('../controllers/likeControls');
const {createComment} = require('../controllers/commentControls');


// defining api routes
router.post('/create', createBlog);
router.get('/retrieve/:id', getBlog);
router.put('/:id/like', likeBlog);
router.put('/:id/unlike', unlikeBlog);
router.put('/:id/comment', createComment);

module.exports = router;