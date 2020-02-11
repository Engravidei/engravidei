const { tbl_type_care_unit } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {

    registerTypeCareUnit: async(req, res) => {
        const { id_type_care_unit, name_type_unit } = req.body;
        const typeCareUnit = await tbl_type_care_unit.create( { id_type_care_unit, name_type_unit } )
            .catch(err => getCatch(err));
        return res.status(201).json(typeCareUnit);
    },

    listTypeCareUnit: async(req, res) => {
        const typesCareUnit = await tbl_type_care_unit.findAll( {raw: true} )
            .catch(err => getCatch(err));
        return res.json(typesCareUnit);
    },

    getTypeCareUnit: async(req, res) => {
        const id_type_care_unit = req.params.id;
        const typeCareUnit = await tbl_type_care_unit.findOne( {where: {id_type_care_unit : id_type_care_unit} } )
            .catch(err => getCatch(err));
        return res.json(typeCareUnit);
    },

    getTypeCareUnitByName: async(req, res) => {
        const name_type_unit = req.body.name_type_unit;
        const typeCareUnit = await tbl_type_care_unit.findOne( {where: {name_type_unit : name_type_unit} } )
            .catch(err => getCatch(err));
        return res.json(typeCareUnit); 
    },

    deleteTypeCareUnit: async(req, res) => {
        const id_type_care_unit = req.params.id;
        const typeCareUnit = await tbl_type_care_unit.destroy( {where: {id_type_care_unit : id_type_care_unit} } )
            .catch(err => getCatch(err));
        return res.json(typeCareUnit);
    },

    deleteTypeCareUnitByName: async(req, res) => {
        const name_type_unit = req.body.name_type_unit;
        const typeCareUnit = await tbl_type_care_unit.destroy( {where: {name_type_unit : name_type_unit} } )
            .catch(err => getCatch(err));
        return res.json(typeCareUnit);
    },

    updateTypeCareUnit: async(req, res) => {
        const id_type_care_unit = req.params.id;
        const typeCareUnit = await tbl_type_care_unit.findOne( {where: {id_type_care_unit : id_type_care_unit} } )
            .then(
                async typeCareUnit => {
                    const typeCareUnitUpdate = await typeCareUnit.update(req.body)
                        .catch(err => getCatch(err));
                    return typeCareUnit;
                }
            )
            .catch(err => getCatch(err));
        return res.json(typeCareUnit);
    },

};