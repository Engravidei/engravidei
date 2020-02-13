const { tbl_users, tbl_doctors } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {
    
    userLogin: async(req, res) => {
        
        const { email, password } = req.body;

        const user = await tbl_users.findOne({where:{email}})
            .catch(err => getCatch(err));

        if(user !== null ) {
            if(user.password === password) {
                user.password = undefined;
                return res.json(user);
            }
            else {
                return res.status(409).json({error: 'Invalid Password'});
            }
        }
        else {
            return res.status(409).json({error: 'Invalid email'});
        }

    },

    doctorLogin: async(req, res) => {
        
        const { email, password } = req.body;

        const doctor = await tbl_doctors.findOne({where:{email}})
            .catch(err => getCatch(err));
        
        if(doctor !== null) {
            if(doctor.password === password) {
                doctor.password = undefined;
                return res.json(doctor);
            }
            else {
                return res.status(409).json({error: 'Invalid Password'});
            }
        }
        else {
            return res.status(409).json({error: 'Invalid email'});
        }

    },

};