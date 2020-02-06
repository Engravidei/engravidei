const tbl_user = require('../models/tbl_users');
const getCatch = require('../utils/getCatch');

module.exports = {
    registerUser: async ({ id_user, name, email, password, birth_date, parturition_preview }) => {
        const user = await tbl_user.create({ id_user, name, email, password, birth_date, parturition_preview })
            .catch(err => getCatch(err), {success: false});

        return {success:true, user};
    }
};