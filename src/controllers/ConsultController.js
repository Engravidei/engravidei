const { tbl_consult } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {

    registerConsult: async(req, res) => {
        const { id_consult, fk_id_user, fk_id_care_unit, fk_id_consult_type, doctor_name } = req.body;
        const consult = await tbl_consult.create({ id_consult, fk_id_user, fk_id_care_unit, fk_id_consult_type, doctor_name })
            .catch(err => getCatch(err));
        return res.status(201).json(consult);
    },

    listConsults: async(req, res) => {
        const consults = await tbl_consult.findAll( { raw : true } )
            .catch(err => getCatch(err));
        return res.json(consults);
    },

};