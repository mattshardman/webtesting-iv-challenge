const express = require('express');
const routes = express.Router();
const Users = require('../data/helpers');

routes.get('/', (req, res) => {
    res.json({ api: "working" });
});

routes.get('/api/users', async (req, res) => {
    const users = await Users.get();
    res.status(200).json(users);
});

routes.post('/api/users', async (req, res) => {
    const users = await Users.create(req.body);
    res.status(201).json(users);
});

routes.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const users = await Users.remove(id);
    res.status(201).json(users);
});

module.exports = routes;
