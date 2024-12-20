const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./index"); // import index.js

const app = express();

const corsOptions = {
    origin: 'https://www.aurorasdrikkelek.no',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors());

const dbUrl = "mongodb://mongo:jCJwpvJhUwnhSkDltBTnhbQbNTJmzJFz@autorack.proxy.rlwy.net:59730";


mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
