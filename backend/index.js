const express = require("express");
const mongoose = require("mongoose");
const Game = require("./model/games");
const Card = require("./model/cards");
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

module.exports = router;
