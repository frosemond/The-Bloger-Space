const { Comment } = require ('../models');

const commentdata = [
    {
        user_id: 2,
        post_id: 1,
        comment_detail: 'I just learned about this in my class!'
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;