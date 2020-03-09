const mongoose = require("mongoose");

const timeSchema = new mongoose.Schema({
    email: {
        type: String,
        max: 255,
        required: true
    },
    dayDate: {
        type: String,
        required: true
    },
    timeIn: {
        type: String,
        required: true
    },
    timeOut: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Timetable", timeSchema);

