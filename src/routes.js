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
routes.get('/getUserByEmail', getController.UserController.getUserByEmail);
routes.delete('/deleteUser/:id', getController.UserController.deleteUser);
routes.delete('/deleteUserByEmail', getController.UserController.deleteUserByEmail);
routes.put('/updateUser/:id', getController.UserController.updateUser);

//CareUnitController routes
routes.post('/registerCareUnit', getController.CareUnitController.registerCareUnit);
routes.get('/listCareUnits', getController.CareUnitController.listCareUnits);
routes.get('/getCareUnit/:id', getController.CareUnitController.getCareUnit);
routes.get('/getCareUnitByName', getController.CareUnitController.getCareUnitByName);
routes.get('/getCareUnitsOfTypeX/:id', getController.CareUnitController.getCareUnitsOfTypeX);
routes.delete('/deleteCareUnit/:id', getController.CareUnitController.deleteCareUnit);
routes.delete('/deleteCareUnitByName', getController.CareUnitController.deleteCareUnitByName);
routes.put('/updateCareUnit/:id', getController.CareUnitController.updateCareUnit);

//TypeCareUnitController routes
routes.post('/registerTypeCareUnit', getController.TypeCareUnitController.registerTypeCareUnit);
routes.get('/listTypeCareUnit', getController.TypeCareUnitController.listTypeCareUnit);
routes.get('/getTypeCareUnit/:id', getController.TypeCareUnitController.getTypeCareUnit);
routes.get('/getTypeCareUnitByName', getController.TypeCareUnitController.getTypeCareUnitByName);
routes.delete('/deleteTypeCareUnit/:id', getController.TypeCareUnitController.deleteTypeCareUnit);
routes.delete('/deleteTypeCareUnitByName', getController.TypeCareUnitController.deleteTypeCareUnitByName);
routes.put('/updateTypeCareUnit/:id', getController.TypeCareUnitController.updateTypeCareUnit);

//ConsultTypeController routes
routes.post('/registerConsultTye', getController.ConsultTypeController.registerConsultType);
routes.get('/listConsultTypes', getController.ConsultTypeController.listConsultTypes);
routes.get('/getConsultType/:id', getController.ConsultTypeController.getConsultType);
routes.get('/getConsultTypeByName', getController.ConsultTypeController.getConsultTypeByName);
routes.delete('/deleteConsultyType/:id', getController.ConsultTypeController.deleteConsultType);
routes.delete('/deleteConsultTypeByName', getController.ConsultTypeController.deleteConsultTypeByName);
routes.put('/updateConsultType', getController.ConsultTypeController.updateConsultType);

//ConsultController routes
routes.post('/registerConsult', getController.ConsultController.registerConsult);
routes.get('/listConsults', getController.ConsultController.listConsults);
routes.get('/getConsult/:id', getController.ConsultController.getConsult);
routes.get('/getConsultOfTypeX/:id', getController.ConsultController.getConsultOfTypeX);
routes.get('/getConsultsFromUser', getController.ConsultController.getConsultsFromUser);
routes.delete('/deleteConsult/:id', getController.ConsultController.deleteConsult);
routes.put('/updateConsult/:id', getController.ConsultController.updateConsult);

//DoctorController routes
routes.post('/registerDoctor', getController.DoctorController.registerDoctor);
routes.get('/listDoctors', getController.DoctorController.listDoctors);
routes.get('/getDoctor/:id', getController.DoctorController.getDoctor);
routes.get('/getDoctorByEmail', getController.DoctorController.getDoctorByEmail);
routes.delete('/deleteDoctor/:id', getController.DoctorController.deleteDoctor);
routes.delete('/deleteDoctorByEmail', getController.DoctorController.deleteDoctorByEmail);
routes.put('/updateDoctor/:id', getController.DoctorController.updateDoctor);

module.exports = routes;