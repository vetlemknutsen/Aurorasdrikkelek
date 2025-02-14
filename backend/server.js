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

app.use(cors(corsOptions));

const dbUrl = process.env.MONGO_PUBLIC_URL;


app.use(express.json());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
