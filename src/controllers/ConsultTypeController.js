const { tbl_consult_type } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {

    registerConsultType: async(req, res) => {
        const { id_consult_type, name_consult_type } = req.body;
        const consultType = await tbl_consult_type.create( {id_consult_type, name_consult_type} )
            .catch(err => getCatch(err));
        return res.json(consultType);
    },

    listConsultTypes: async(req ,res) => {
        const consultTypes = await tbl_consult_type.findAll( {raw : true} )
            .catch(err => getCatch(err));
        return res.json(consultTypes);
    },
    
    getConsultType: async(req, res) => {
        const id_consult_type = req.params.id;
        const consultType = await tbl_consult_type.findOne( {where: { id_consult_type } } )
            .catch(err => getCatch(err));
        return res.json(consultType);
    },

    getConsultTypeByName: async(req, res) => {
        const name_consult_type = req.body.name_consult_type;
        const consultType = await tbl_consult_type.findOne( {where: {name_consult_type} } )
            .catch(err => getCatch(err));
        return res.status(201).json(consultType);
    },

    deleteConsultType: async(req, res) => {
        const id_consult_type = req.params.id;
        const consultType = await tbl_consult_type.destroy( {where: {id_consult_type}} )
            .catch(err => getCatch(err));
        return res.json(consultType);
    },  

    deleteConsultTypeByName: async(req, res) => {
        const name_consult_type = req.body.name_consult_type;
        const consultType = await tbl_consult_type.destroy( {where: {name_consult_type} } )
            .catch(err => getCatch(err));
        return res.json(consultType);
    },

    updateConsultType: async (req, res) => {
        const id_consult_type = req.params.id;
        const consultType = await tbl_consult_type.findOne({where: {id_consult_type : id_consult_type}})
            .then(
                async consult => {
                    const consultTypeUpdated = await consult.update(req.body)
                        .catch(err => getCatch(err));
                    return consultTypeUpdated;
                }
            )
            .catch(err => getCatch(err));
        return res.json(consultType);
    }, 

};