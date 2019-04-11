const db = require('../dbConfig');

const getUsers = async () => {
    const users = await db('users');
    return users;
}

module.exports = {
    getUsers
}