const { tbl_doctors, tbl_users } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {

    registerDoctor: async(req, res) => {
        const { id_doctor, fk_id_care_unit, name, email, password } = req.body;
        const doctor = await tbl_doctors.create({ id_doctor, fk_id_care_unit, name, email, password })
            .catch(err => getCatch(err));
        return res.status(201).json(doctor);
    },

    addPatient: async(req, res) => {
        const { doctorEmail, id_user } = req.body;
        const doctor = await tbl_doctors.findOne({where : {email : doctorEmail}})
            .catch(err => getCatch(err));
        const user = await tbl_users.findOne({where: {id_user}})
            .catch(err => getCatch(err));
        user.fk_id_doctor = doctor.id_doctor;
        await user.save();
        return res.json(user);
    },

    listDoctors: async(req, res) => {
        const doctors = await tbl_doctors.findAll( {raw : true} )
            .catch(err => getCatch(err));
        return res.json(doctors);
    },

    getDoctor: async(req, res) => {
        const id_doctor = req.params.id;
        const doctor = await tbl_doctors.findOne( {where : {id_doctor}} )
            .catch(err => getCatch(err));
        return res.json(doctor);
    },

    getDoctorByEmail: async(req, res) => {
        const email = req.body.email;
        const doctor = await tbl_doctors.findOne( {where : {email}} )
            .catch(err => getCatch(err));
        return res.json(doctor);
    },

    getPatients: async(req, res) => {
        const email = req.body.email;
        const doctor = await tbl_doctors.findOne({where:{email}})
            .catch(err=> getCatch(err));
        const users = await tbl_users.findAll({where:{fk_id_doctor : doctor.id_doctor}})
            .catch(err => getCatch(err));
        return res.json(users);
    },

    deleteDoctor: async(req, res) => {
        const id_doctor = req.params.id;
        const doctor = await tbl_doctors.destroy( {where : {id_doctor}} )
            .catch(err => getCatch(err));
        return res.json(doctor);
    },

    deleteDoctorByEmail: async(req, res) => {
        const email = req.body.email;
        const doctor = await tbl_doctors.destroy( {where: {email}} )
            .catch(err => getCatch(err));
        return res.json(doctor);
    },

    updateDoctor: async(req, res) => {
        const id_doctor = req.params.id;
        const doctor = await tbl_doctors.findOne( {where: {id_doctor}})
            .then(
                async doctor => {
                    const doctorUpdate = await doctor.update(req.body)
                        .catch(err => getCatch(err));
                    return doctorUpdate;
                }
            )
            .catch(err => getCatch(err));
        return res.json(doctor);
    },

};