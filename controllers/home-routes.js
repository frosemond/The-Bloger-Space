const router = require('express').Router();
const { Post, Comment } = require('../models');


// get all posts for homepage
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: Comment,
                    attributes: ['comment_detail'],
                },
            ],
        });

        const posts = dbPostData.map((post) => 
        post.get({ plain: true })
        );
        console.log(req.session);
        console.log("req.sessionID", req.sessionID)
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get one post by ID
router.get('/post/:id', async (req, res) => {
    if(!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            const dbPostData = await Post.findByPk(req.params.id, {
                include: [
                    {
                        model: Comment,
                        attributes: [
                            'id',
                            'comment_detail',
                        ],
                    },
                ],
            });
            const post = dbPostData.get({ plain: true });
            res.render('post', {post, loggedIn: req.session.loggedIn });
        } catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

