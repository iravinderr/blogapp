const express = require('express');
const router = express.Router();


// importing controllers
const {createBlog, getBlog} = require('../controllers/blogControls');
const {likeBlog, unlikeBlog} = require('../controllers/likeControls');


// defining api routes
router.post('/create', createBlog);
router.get('/retrieve/:id', getBlog);
router.put('/:id/like', likeBlog);
router.put('/:id/unlike', unlikeBlog);

module.exports = router;