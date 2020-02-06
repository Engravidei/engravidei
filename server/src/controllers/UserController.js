const { tbl_users } = require('../models');
const Service = require('../services/UserService');
const getCatch = require('../utils/getCatch');

module.exports = {

        registerUser: async (req, res) => {
            const { id_user, name, email, password, birth_date, parturition_preview } = req.body;
            const user = await tbl_users.create({ id_user, name, email, password, birth_date, parturition_preview })
                .catch(err => getCatch(err));
            return res.json(user);
        }


};