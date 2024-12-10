const messageModel = require('../models/messageModel');

exports.getHomePage = (req, res) => {
    const message = messageModel.getMessage();
    res.render('homeView', { message });
};
