const mongoose = require('mongoose');

const callSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const CallsModel = mongoose.model('Call', callSchema);
module.exports = CallsModel;