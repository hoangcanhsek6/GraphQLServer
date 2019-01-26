const mongoose = require('mongoose');
const passportLocalMongose = require('passport-local-mongoose');

const user = new mongoose.Schema({_id: { type: String} });

user.plugin(passportLocalMongose);

module.exports = mongoose.model('User', user);