const tbl_users = require('../models/tbl_users');
const Service = require('../services/UserService');

module.exports = {

        registerUser: async (req, res) => {
            const { id_user, name, email, password, birth_date, parturition_preview } = req.body;
            const user = await Service.registerUser({ id_user, name, email, password, birth_date, parturition_preview });

            if(user.success) {
                return res.status(201).json(data.user);
            }
            else {
                return res.status(422).json({});
            }

        }


};