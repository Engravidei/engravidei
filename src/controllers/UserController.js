const { tbl_users, tbl_doctors } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {

        registerUser: async (req, res) => {
            const { id_user, fk_id_doctor, name, email, password, birth_date, parturition_preview } = req.body;
            const user = await tbl_users.create({ id_user, fk_id_doctor, name, email, password, birth_date, parturition_preview })
                .catch(err => getCatch(err));
            return res.status(201).json({message:`User +${name} created succesfully!`});
        },

        listUsers: async (req, res) => {
            const { require } = req.body;
            if(require == process.env.SECRET) {
                const users = await tbl_users.findAll({raw: true})
                    .catch(err => getCatch(err));
                return res.json(users);
            }
            else {
                return res.status(409).json({error: "You don't have access to this area"});
            }
        },

        getUser: async (req, res) => {
            const id_user = req.params.id;
            const user = await tbl_users.findOne( {where:{ id_user : id_user }} )
                .catch(err => getCatch(err));
            return res.json(user);
        },

        getUserDoctor: async(req, res) => {
            const email = req.body.email;
            const user = await tbl_users.findOne( {where:{ email : email }} )
                .then(
                    async user => {
                        const doctor = tbl_doctors.findOne({where:{id_doctor : user.fk_id_doctor}})
                            .catch(err => getCatch(err));
                        return doctor;
                    }
                )
                .catch(err => getCatch(err));
            return res.json(user);
        },

        deleteUserByEmail: async(req, res) => {
            const { email, password } = req.body;

            const user = await tbl_users.findOne({where:{email}})
                .catch(err => getCatch(err));

            if(user !== null ) {
                if(user.password === password) {
                    const userDeleted = await tbl_users.destroy({where:{email}})
                        .catch(err => getCatch(err));
                    return res.json(userDeleted);
                }
                else {
                    return res.status(409).json({error: 'Invalid Password'});
                }
            }
            else {
                return res.status(409).json({error: 'Invalid email'});
            }
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