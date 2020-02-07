const express = require('express');

const routes = express.Router();
const UserController = require('./controllers/UserController');
const CareUnitController = require('./controllers/CareUnitController');

routes.get('/', (req, res) => {
    return res.json({hello: 'World'});
});

//UserController routes
routes.post('/registerUser', UserController.registerUser);
routes.get('/listUsers', UserController.listUsers);
routes.get('/getUser/:id', UserController.getUser);
routes.delete('/deleteUser/:id', UserController.deleteUser);
routes.put('/updateUser/:id', UserController.updateUser);

//CareUnitController routes
routes.post('/registerCareUnit', CareUnitController.registerCareUnit);

module.exports = routes;