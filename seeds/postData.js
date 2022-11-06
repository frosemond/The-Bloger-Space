const { Post } = require ('../models');

const postdata = [
    {
        title: 'Object-Relation Mapping',
        content: 'I have really loved learning about ORMs, It\'s really simplified the way I create queries in SQL!',
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;