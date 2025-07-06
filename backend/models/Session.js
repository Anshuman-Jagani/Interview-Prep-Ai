const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    role: {typr: String, required: true},
    experience: { type: String, required: true },
    topicsToFocus: { type: String, required: true },
    description: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
}, {tiemwstamps: true});

module.exports = mongoose.model('Session', sessionSchema);