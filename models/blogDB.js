const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    commenter: {
        type: String,
        required: true,
        maxLength: 50,
    },
    content: {
        type: String,
        required: true,
        maxLength: 500,
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now(),
    }
});

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50,
    },
    content: {
        type: String,
        required: true,
        maxLength: 5000,
    },
    likes: {
        type: Number,
        default: 0,
    },
    comments: [commentSchema]
});

module.exports = mongoose.model('blogDB', blogSchema);