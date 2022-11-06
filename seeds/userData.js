const { User } = require('../models');

const userdata = [
    {
    username: 'Emily',
    password: 'emilypassword'
},
{
    username: 'Leo',
    password: 'leopassword'
}
]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;