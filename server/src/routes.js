const express = require('express');

const routes = express.Router();
const UserController = require('./controllers/UserController');
const CareUnitController = require('./controllers/CareUnitController');
const TypeCareUnitController = require('./controllers/TypeCareUnitController');

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
routes.delete('/deleteCareUnit/:id', CareUnitController.deleteCareUnit);
routes.get('/listCareUnits', CareUnitController.listCareUnits);
routes.get('/getCareUnit/:id', CareUnitController.getCareUnit);
routes.put('/updateCareUnit/:id', CareUnitController.updateCareUnit);

//TypeCareUnitController routes
routes.post('/registerTypeCareUnit', TypeCareUnitController.registerTypeCareUnit);
routes.get('/listTypeCareUnit', TypeCareUnitController.listTypeCareUnit);
routes.get('/getTypeCareUnit/:id', TypeCareUnitController.getTypeCareUnit);
routes.get('getCareUnitsOfTypeX/:id', TypeCareUnitController.getCareUnitsOfTypeX);

module.exports = routes;