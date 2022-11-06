const { Post } = require ('../models');

const postdata = [
    {
        title: '',
        description: '',
        user: ''
    }
]

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;