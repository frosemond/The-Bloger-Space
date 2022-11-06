const { Comment } = require ('../models');

const commentdata = [
    {
        comment_detail: 'I just learned about this in my class!',
        user_id: 2,
        post_id: 1
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;