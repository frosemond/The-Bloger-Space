const router = require('express').Router();
const { Post, Comment } =require('../models');
const withAuth = require('../utils/helper');


router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            username: req.session.username
        },
        attributes: [
            'id',
            'title',
            'content'
        ],
        include: [{
            model: Comment,
            attributes: [
                'id',
                'comment-detail',
                'post_id'
            ]
        }]
    })
})
.then(dbPostData => {
    const posts = dbPostData.map((post) => post.get({ plain: true}));

    res.render("dashboard", {
        posts,
        loggedIn: true
    });
});
.catch (err => {
    console.log(err);
    res.status(500).json(err);
});
});
