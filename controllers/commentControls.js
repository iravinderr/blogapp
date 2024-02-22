const blogDB = require('../models/blogDB');

exports.createComment = async(req, res) => {
    try{
        const {id} = req.params;
        const {commenter, content} = req.body;

        const comment = await blogDB.findByIdAndUpdate(
            {_id: id},
            {comments: [{commenter, content}]},
        )

        res.status(200).json({
            success: true,
            data: comment,
            message: "Comment created successfully"
        });
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