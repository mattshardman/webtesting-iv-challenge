const db = require('../dbConfig');

const get = async () => {
    const users = await db('users');
    return users;
}

const create = async user => {
    const id = await db.insert(user).into('users');
    const newUser = await db('users').where({id});
    return newUser;
}

const remove = async id => {
    const del = await db('users').where({id}).del();
    return del;
};

module.exports = {
    get,
    create,
    remove
}