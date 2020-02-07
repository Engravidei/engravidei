const { tbl_care_unit } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {

    registerCareUnit: async(req, res) => {
        const { id_care_unit, name, address } = req.body;
        console.log(tbl_care_unit);
        const careUnit = await tbl_care_unit.create({ id_care_unit, name, address })
            .catch(err => getCatch(err));
        return res.json(careUnit);
    },

    

};