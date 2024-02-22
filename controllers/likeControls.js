const blogDB = require('../models/blogDB');

exports.likeBlog = async(req, res) => {
    try{
        const {id} = req.params;
        const blog = await blogDB.findByIdAndUpdate(
            {_id: id},
            {$inc: {likes: 1}}
        )

        res.status(200).json({
            success: true,
            data: blog,
            message: "Blog liked successfully",
        })
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message
        })
    }
}

exports.unlikeBlog = async(req, res) => {
    try{
        const {id} = req.params;
        const blog = await blogDB.findByIdAndUpdate(
            {_id: id},
            {$inc: {likes: -1}}
        )

        res.status(200).json({
            success: true,
            data: blog,
            message: "Blog unliked successfully",
        })
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message
        })
    }
}