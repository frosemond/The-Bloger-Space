const router = require ('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../utils/helper');


// get all comments

router.get('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.findAll({
            include: [
                {
                    model: Comment,
                    attributes: ['comment_detail'],
                },
            ],
        });
        const comments = dbCommentData.map((comment) => 
        comment.get({ plain: true })
        );
        console.log(req.session);
        console.log("req.sessionID", req.sessionID)
        res.render("comments", { comments });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});