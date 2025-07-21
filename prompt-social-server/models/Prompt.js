const mongoose = require('mongoose');
const { MODELS } = require('../config/constants');

const promptSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    tags: [{ type: String, required: true }],
    model: {
        type: String,
        enum: MODELS,
        required: true
    },
    likes: { type: Number, default: 0 },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    results: [
        {
            output: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
            username: String
        }
    ]
});

module.exports = mongoose.model('Prompt', promptSchema);
