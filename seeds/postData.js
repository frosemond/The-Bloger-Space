const { Post } = require ('../models');

const postdata = [
    {
        title: '',
        content: '',
        user: ''
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;