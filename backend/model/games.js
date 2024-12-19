const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }]
});

module.exports = mongoose.model('Game', gameSchema);
