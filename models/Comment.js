const { Model, DataType } = require('sequelize');
const sequelize = require ('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_detail: {
            type: DataType.STRING,
            allowNull: false,
        },
        post_id: {
            type: DataType.INTEGER,
            references: {
                model: 'post',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;