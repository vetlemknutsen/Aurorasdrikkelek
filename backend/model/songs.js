
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    lyrics: { type: String, required: true },
    backgroundColor: { type: String, required: true },
}, { collection: 'songs' });

const Song = mongoose.models.Song || mongoose.model('Song', songSchema);

module.exports = Song;
