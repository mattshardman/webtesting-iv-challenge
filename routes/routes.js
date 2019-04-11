const express = require('express');
const routes = express.Router();
const Users = require('../data/helpers');

routes.get('/', (req, res) => {
    res.json({ api: "working" });
});

routes.get('/api/users', async (req, res) => {
    const users = await Users.getUsers();
    res.status(200).json(users);
});

module.exports = routes;
