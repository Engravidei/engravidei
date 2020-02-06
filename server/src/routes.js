const express = require('express');

const routes = express.Router();
const UserController = require('./controllers/UserController');

routes.get('/', (req, res) => {
    return res.json({hello: 'World'});
});

//UserController routes
routes.post('/registerUser', UserController.registerUser);

module.exports = routes;