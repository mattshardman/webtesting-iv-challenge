const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({ api: "working" });
});

routes.get('/api/users', (req, res) => {
    res.status(200).json({ api: "working" });
});

module.exports = routes;