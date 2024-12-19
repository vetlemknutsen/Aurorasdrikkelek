const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./index"); // import index.js

const app = express();

app.use(cors());

const dbUrl = process.env.MONGO_PUBLIC_URL;


mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
