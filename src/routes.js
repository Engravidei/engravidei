const express = require('express');

const routes = express.Router();
const getController = require('./utils/getController');

routes.get('/', (req, res) => {
    return res.json({hello: 'World'});
});

//UserController routes
routes.post('/registerUser', getController.UserController.registerUser);
routes.get('/listUsers', getController.UserController.listUsers);
routes.get('/getUser/:id', getController.UserController.getUser);
routes.delete('/deleteUser/:id', getController.UserController.deleteUser);
routes.put('/updateUser/:id', getController.UserController.updateUser);

//CareUnitController routes
routes.post('/registerCareUnit', getController.CareUnitController.registerCareUnit);
routes.delete('/deleteCareUnit/:id', getController.CareUnitController.deleteCareUnit);
routes.get('/listCareUnits', getController.CareUnitController.listCareUnits);
routes.get('/getCareUnit/:id', getController.CareUnitController.getCareUnit);
routes.put('/updateCareUnit/:id', getController.CareUnitController.updateCareUnit);
routes.get('/getCareUnitsOfTypeX/:id', getController.CareUnitController.getCareUnitsOfTypeX);

//TypeCareUnitController routes
routes.post('/registerTypeCareUnit', getController.TypeCareUnitController.registerTypeCareUnit);
routes.get('/listTypeCareUnit', getController.TypeCareUnitController.listTypeCareUnit);
routes.get('/getTypeCareUnit/:id', getController.TypeCareUnitController.getTypeCareUnit);
routes.put('/updateTypeCareUnit/:id', getController.TypeCareUnitController.updateTypeCareUnit);
routes.delete('/deleteTypeCareUnit/:id', getController.TypeCareUnitController.deleteTypeCareUnit);


//ConsultTypeController routes
routes.post('/registerConsultTye', getController.ConsultTypeController.registerConsultType);
routes.get('/listConsultTypes', getController.ConsultTypeController.listConsultTypes);

module.exports = routes;