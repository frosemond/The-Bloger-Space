const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

module.exports = { Post, Comment};