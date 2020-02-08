const { tbl_care_unit } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {

    registerCareUnit: async(req, res) => {
        const { id_care_unit, name, address } = req.body;
        const careUnit = await tbl_care_unit.create({ id_care_unit, name, address })
            .catch(err => getCatch(err));
        return res.status(201).json(careUnit);
    },

    deleteCareUnit: async(req, res) => {
        const id_care_unit = req.params.id;
        const careUnit = await tbl_care_unit.destroy( {where: {id_care_unit : id_care_unit} } )
            .catch(err => getCatch(err));
        return res.json(careUnit);
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

};