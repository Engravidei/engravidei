const { tbl_type_care_unit, tbl_care_unit } = require('../models');
const getCatch = require('../utils/getCatch');

/**
 * Create {
 *          Add care unit on a type,
 *          Register Type Care unit
 *        }
 * Read {
 *         List All,
 *         Get,
 *         list care units that pertence that type
 *       }
 * Update
 * Delete
 */

module.exports = {

    //Need to change de fk_id_care_unit for a array of fk_id_care_unit
    registerTypeCareUnit: async(req, res) => {
        const { id_type_care_unit, name_type_unit, fk_id_care_unit } = req.body;
        const typeCareUnit = await tbl_type_care_unit.create( { id_type_care_unit, name_type_unit, fk_id_care_unit } )
            .catch(err => getCatch(err));
        return res.json(typeCareUnit);
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

    getCareUnitsOfTypeX: async(req, res) => {
        const id_type_care_unit = req.params.id;
        const typeCareUnit = await tbl_care_unit.findAll( {where: { id_type_care_unit : fk_id_care_unit } } )
            .catch(err => getCatch(err));
        return res.json(typeCareUnit);
    },

};