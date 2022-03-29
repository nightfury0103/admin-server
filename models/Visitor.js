const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    cookie: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('visitor', VisitorSchema);
