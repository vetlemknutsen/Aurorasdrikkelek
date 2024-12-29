const express = require("express");
const mongoose = require("mongoose");
const Game = require("./model/games");
const Card = require("./model/cards");
const Song = require('./model/songs');
const router = express.Router();

const fs = require('fs');
const path = require('path');
const songsFilePath = path.join(__dirname, 'songs.json');


router.get("/api/games/:gameName/cards", (req, res) => {
    const { gameName } = req.params;

    try {
        const data = JSON.parse(
            fs.readFileSync(path.join(__dirname, "gamesData.json"), "utf-8")
        );

        const game = data[gameName];

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
        const data = fs.readFileSync(songsFilePath);
        const songs = JSON.parse(data);


        const song = songs.find((song) => song.title.toLowerCase() === songTitle.toLowerCase());

        if (!song) {
            return res.status(404).json({ message: `Song "${songTitle}" not found` });
        }

        res.json({
            title: song.title,
            lyrics: song.lyrics,
            backgroundColor: song.backgroundColor || "#ffffff"
        });
    } catch (error) {
        console.error("Error fetching song:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
module.exports = router;
