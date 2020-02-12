const { tbl_feedback_opnion } = require('../models');
const getCatch = require('../utils/getCatch');

module.exports = {

    registerFeedbackOpnion: async(req, res) => {
        const { id_feedback_opnion, name } = req.body;
        const feedbackOpnion = await tbl_feedback_opnion.create({id_feedback_opnion, name})
            .catch(err => getCatch(err));
        return res.status.json(feedbackOpnion);
    },

    listFeedbackOpnion: async(req, res) => {
        const feedbackOpnions = await tbl_feedback_opnion.findAll({raw : true})
            .catch(err => getCatch(err));
        return res.json(feedbackOpnions);
    },

    getFeedbackOpnion: async(req, res) => {
        const id_feedback_opnion = req.params.id;
        const feedbackOpnion = await tbl_feedback_opnion.findOne({where: {id_feedback_opnion : id_feedback_opnion}})
            .catch(err => getCatch(err));
        return res.json(feedbackOpnion);
    },

    getFeedbackOpnionByName: async(req, res) => {
        const name = req.body.name;
        const feedbackOpnion = await tbl_feedback_opnion.findOne({where: {name}})
            .catch(err => getCatch(err));
        return res.json(feedbackOpnion);
    },

    deleteFeedbackOpnion: async(req, res) => {
        const id_feedback_opnion = req.params.id;
        const feedbackOpnion = await tbl_feedback_opnion.destoy({where: {id_feedback_opnion}})
            .catch(err => getCatch(err));
        return res.json(feedbackOpnion);
    },

    deleteFeedbackOpnionByName: async(req, res) => {
        const name = req.body.name;
        const feedbackOpnion = await tbl_feedback_opnion.destoy({where: {name}})
            .catch(err => getCatch(err));
        return res.json(feedbackOpnion);
    },

    updateFeedbackOpnion: async(req, res) => {
        const id_feedback_opnion = req.params.id;
        const feedbackOpnion = await tbl_feedback_opnion.findOne({where: {id_feedback_opnion}})
            .then(
                async feedbackOpnion => {
                    const feedbackOpnionUpdate = await feedbackOpnion.update(req.body)
                        .catch(err => getCatch(err));
                    return feedbackOpnionUpdate;
                }
            )
            .catch(err => getCatch(err));
        return res.json(feedbackOpnion);
    },

};