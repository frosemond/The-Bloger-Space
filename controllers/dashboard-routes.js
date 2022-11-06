const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
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
                'post_id',
                'user_id'
            ],
            include: [{
                model: User,
                attributes: ['username']
            }]
        }]
    })
        .then(dbPostData => {
            const posts = dbPostData.map((post) => post.get({ plain: true }));

            res.render("dashboard", {
                posts,
                loggedIn: true
            });
        });
    // .catch (err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
});

module.exports = router;
