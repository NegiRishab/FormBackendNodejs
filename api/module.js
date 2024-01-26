const dbClient = require('mongoose');


const userformData = new dbClient.Schema({
    email: {
        type: String,
        // required: true,
        // unique: true,
    },
    name: {
        type: String,
        // required: true,
    },

    number: {
        type: String,
        // required: true,
    },
    country: {
        type: String,
        // required: true,
    },
    daily: {
        type: Boolean
    },
    monthly: {
        type: Boolean
    },
    yearly: {
        type: Boolean
    },
    gender: {
        type: String,
        // required: true,
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = dbClient.model('user', userformData);
