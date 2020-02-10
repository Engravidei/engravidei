const { tbl_users } = require('../models');

module.exports = {
    registerUser: async ({ id_user, name, email, password, birth_date, parturition_preview }) => {
        const user = await tbl_users.create({ id_user, name, email, password, birth_date, parturition_preview })

        return {success:true, user};
    }
};