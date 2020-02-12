const { tbl_consult, tbl_users } = require('../models');
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

    getConsult: async(req, res) => {
        const id_consult = req.params.id;
        const consult = await tbl_consult.findOne( {where: { id_consult : id_consult }} )
            .catch(err => getCatch(err));
        return res.json(consult);
    },

    getConsultOfTypeX: async(req, res) => {
        const fk_id_consult_type = req.params.id;
        const consultTypes = await tbl_consult.findAll( {where: {fk_id_consult_type : fk_id_consult_type} }, {raw: true} )
            .catch(err => getCatch(err));
        return res.json(consultTypes);
    },

    getConsultsFromUser: async(req, res) => {
        const email = req.body.email;
        const user = await tbl_users.findOne( {where: {email}} )
            .then(
                async user => {
                    if(user === null) {
                        return res.json("Email need be valid");
                    }
                    const userConsults = await tbl_consult.findAll({where: {fk_id_user : user.id_user}})
                        .catch(err => getCatch(err));
                    return userConsults;
                }
            )
            .catch(err => getCatch(err));
        return res.json(user);
    },

    deleteConsult: async(req, res) => {
        const id_consult = req.params.id;
        const consult = await tbl_consult.destroy( {where: {id_consult}} )
            .catch(err => getCatch(err));
        return res.json(consult);
    },

    updateConsult: async(req, res) => {
        const id_consult = req.params.id;
        const consult = await tbl_consult.findOne( {where: {id_consult}} )
            .then(
                async consult => {
                    const consultUpdate = await consult.update(req.body)
                        .catch(err => getCatch(err));
                    return consultUpdate;
                }
            )
            .catch(err => getCatch(err));
        return res.json(consult);
    }

};