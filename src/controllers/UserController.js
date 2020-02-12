const { tbl_users } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {

        registerUser: async (req, res) => {
            const { id_user, name, email, password, birth_date, parturition_preview } = req.body;
            const user = await tbl_users.create({ id_user, name, email, password, birth_date, parturition_preview })
                .catch(err => getCatch(err));
            return res.status(201).json(user);
        },

        listUsers: async (req, res) => {
            const users = await tbl_users.findAll({raw: true})
                .catch(err => getCatch(err));
            return res.json(users);
        },

        getUser: async (req, res) => {
            const id_user = req.params.id;
            const user = await tbl_users.findOne( {where:{ id_user : id_user }} )
                .catch(err => getCatch(err));
            return res.json(user);
        },

        getUserByEmail: async(req, res) => {
            const email = req.body.email;
            const user = await tbl_users.findOne( {where:{ email : email }} )
                .catch(err => getCatch(err));
            return res.json(user);
        },

        deleteUser: async (req, res) => {
            const id_user = req.params.id;
            const userDeleted = await tbl_users.destroy( {where: {id_user : id_user} } )
                .catch(err => getCatch(err));
            return res.json(userDeleted);
        },

        deleteUserByEmail: async(req, res) => {
            const email = req.body.email;
            const user = await tbl_users.destroy( {where:{ email : email }} )
                .catch(err => getCatch(err));
            return res.json(user);
        },

        updateUser: async(req, res) => {
            const id_user = req.params.id;
            const userUpdated = await tbl_users.findOne( {where: {id_user : id_user} } )
                .then(
                    async user => {
                        const userUpdated = await user.update(req.body)
                            .catch(err => getCatch(err));
                        return userUpdated;
                    }
                )
                .catch(err => getCatch(err));
            return res.json(userUpdated);
        },

};