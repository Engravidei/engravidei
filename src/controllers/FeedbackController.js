const { tbl_feedback } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {

    registerFeedback: async(req, res) => {
        const { id_feedback, fk_id_feedback_opnion, fk_id_user, description } = req.body;
        const feedback = await tbl_feedback.create({id_feedback, fk_id_feedback_opnion, fk_id_user, description})
            .catch(err => getCatch(err));
        return res.status(201).json(feedback);
    },

    listFeedbacks: async(req, res) => {
        const feedbacks = await tbl_feedback.findAll( {raw : true} )
            .catch(err => getCatch(err));
        return res.json(feedbacks);
    },

    getFeedback: async(req, res) => {
        const id_feedback = req.params.id;
        const feedback = await tbl_feedback.findoOne({where:{id_feedback}})
            .catch(err => getCatch(err));
        return res.json(feedback);
    },

    getFeedbackByDescription: async(req, res) => {
        const description = req.body.description;
        const feedback = await tbl_feedback.findoOne({where:{description}})
            .catch(err => getCatch(err));
        return res.json(feedback);
    },

    getFeedbackOfTypeX: async(req, res) => {
        const fk_id_feedback_opnion = req.params.id;
        const feedbacks = await tbl_feedback.findAll({where:{fk_id_feedback_opnion}})
            .catch(err => getFeedback(err));
        return res.json(feedbacks);
    },
    
    deleteFeedback: async(req, res) => {
        const id_feedback = req.params.id;
        const feedback = await tbl_feedback.destroy({where:{id_feedback}})
            .catch(err => getCatch(err));
        return res.json(feedback);
    },

    deleteFeedbackByDescription: async(req, res) => {
        const description = req.body.description;
        const feedback = await tbl_feedback.destroy({where:{description}})
            .catch(err => getCatch(err));
        return res.json(feedback); 
    },

    updateConsult: async(req, res) => {
        const id_feedback = req.params.id;
        const feedback = await tbl_feedback.findoOne({where:{id_feedback}})
            .then(
                async feedback => {
                    const feedbackUpdate = await feedback.update(req.body)
                        .catch(err => getCatch(err));
                    return feedbackUpdate;
                }
            )
            .catch(err => getCatch(err));
        return res.json(feedback);
    },

};