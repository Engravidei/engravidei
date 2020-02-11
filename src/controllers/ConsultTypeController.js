const { tbl_consult_type } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {

    registerConsultType: async(req, res) => {
        const { id_consult_type, name_consult_type } = req.body;
        const consultType = await tbl_consult_type.create( {id_consult_type, name_consult_type} )
            .catch(err => getCatch(err));
        return res.json(consultType);
    },

    listConsultTypes: async(req, res) => {
        const consultTypes = await tbl_consult_type.findAll( {raw : true} )
            .catch(err => getCatch(err));
        return res.json(consultTypes);
    },

};