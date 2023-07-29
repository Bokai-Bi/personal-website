const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clickerDataSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 1
    },
    clicks: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const ClickerData = mongoose.model('ClickerData', clickerDataSchema);

module.exports = ClickerData;