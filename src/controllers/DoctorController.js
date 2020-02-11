const { tbl_doctors } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {

    registerDoctor: async(req, res) => {
        const { id_doctor, fk_id_user, fk_id_care_unit, name, email, password } = req.body;
        const doctor = await tbl_doctors.create({ id_doctor, fk_id_user, fk_id_care_unit, name, email, password })
            .catch(err => getCatch(err));
        return res.status(201).json(doctor);
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