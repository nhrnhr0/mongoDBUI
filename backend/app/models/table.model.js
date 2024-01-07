const mongoose = require("mongoose");

const Table = mongoose.model(
    "Table",
    new mongoose.Schema({
        name: String,
    })
);

module.exports = Table;