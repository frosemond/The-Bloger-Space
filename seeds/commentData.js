const { Comment } = require ('../models');

const commentdata = [
    {
        comment_detail: '',
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;