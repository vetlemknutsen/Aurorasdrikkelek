
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    game_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
    title: { type: String, required: true },
    color: { type: String, required: true },
});

module.exports = mongoose.model('Card', cardSchema);
