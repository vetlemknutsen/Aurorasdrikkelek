const express = require("express");
const mongoose = require("mongoose");
const Game = require("./model/games");
const Card = require("./model/cards");
const Song = require('./model/songs');
const router = express.Router();

router.get("/api/games/:gameName/cards", async (req, res) => {
    const { gameName } = req.params;

    try {
        const game = await Game.findOne({ name: gameName }).populate("cards").exec();

        if (!game) {
            return res.status(404).json({ message: `Game "${gameName}" not found` });
        }

        res.json({ cards: game.cards });
    } catch (error) {
        console.error("Error fetching cards for game:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get('/api/songs/:songTitle', async (req, res) => {
    const { songTitle } = req.params;

    try {

        const song = await Song.findOne({ title: songTitle });

        if (!song) {
            return res.status(404).json({ message: `Song "${songTitle}" not found` });
        }


        res.json({
            title: song.title,
            lyrics: song.lyrics,
            backgroundColor: song.backgroundColor
        });
    } catch (error) {
        console.error("Error fetching song:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
