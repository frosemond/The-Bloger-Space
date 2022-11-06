const { Comment } = require ('../models');

const commentdata = [
    {
        comment_detail: 'I just learned about this in my class!',
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;