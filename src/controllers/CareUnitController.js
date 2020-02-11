const { tbl_care_unit } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {

    registerCareUnit: async(req, res) => {
        const { id_care_unit, fk_id_type_care_unit, name, address } = req.body;
        const careUnit = await tbl_care_unit.create({ id_care_unit, fk_id_type_care_unit, name, address })
            .catch(err => getCatch(err));
        return res.status(201).json(careUnit);
    },

    listCareUnits: async(req, res) => {
        const careUnits = await tbl_care_unit.findAll( {raw: true} )
            .catch(err => getCatch(err));
        return res.json(careUnits);
    },

    getCareUnit: async(req, res) => {
        const id_care_unit = req.params.id;
        const careUnit = await tbl_care_unit.findOne( {where: {id_care_unit : id_care_unit} } )
            .catch(err => getCatch(err));
        return res.json(careUnit);
    },

    getCareUnitByName: async(req, res) => {
        const name = req.body.name;
        const careUnit = await tbl_care_unit.findOne( {where: {name : name} } )
            .catch(err => getCatch(err));
        return res.json(careUnit);
    },

    deleteCareUnit: async(req, res) => {
        const id_care_unit = req.params.id;
        const careUnit = await tbl_care_unit.destroy( {where: {id_care_unit : id_care_unit} } )
            .catch(err => getCatch(err));
        return res.json(careUnit);
    },

    deleteCareUnitByName: async(req, res) => {
        const name = req.body.name;
        const careUnit = await tbl_care_unit.destroy( {where: {name : name} } )
            .catch(err => getCatch(err));
        return res.json(careUnit);
    },

    updateCareUnit: async(req, res) => {
        const id_care_unit = req.params.id;
        const careUnit = await tbl_care_unit.findOne( {where: {id_care_unit : id_care_unit} } )
            .then(
                async careUnit => {
                    const careUnitUpdated = await careUnit.update(req.body)
                        .catch(err => getCatch(err));
                    return careUnitUpdated;
                }
            )
            .catch(err => getCatch(err));
        return res.json(careUnit);
    },

    getCareUnitsOfTypeX: async(req, res) => {
        const fk_id_type_care_unit = req.params.id;
        const typesCareUnit = await tbl_care_unit.findAll( {where: { fk_id_type_care_unit: fk_id_type_care_unit }, raw:true } )
            .catch(err => getCatch(err));
        if(typesCareUnit === 0) {
            return res.json(typesCareUnit);
        }
        return res.json(typesCareUnit);
    },


};