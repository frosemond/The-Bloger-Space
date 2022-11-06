const { Comment } = require ('../models');

const commentdata = [
    {
        comment_detail: 'I just learned about this in my class!',
        user_id: 1,
        post_id: 2
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;