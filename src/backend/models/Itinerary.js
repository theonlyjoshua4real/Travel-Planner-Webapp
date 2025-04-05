const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    segments: [
        {
            from: {type: String, required: true},
            to: {type: String, required: true},
            transportMode: {
                type: String,
                enum: ['bus', 'train', 'bike', 'plane', 'walking', 'ferry'],
                required: true
            }
        }
    ],
    activities: [
        {
            name: {type: String, required: true},
            location: {type: String, required: true}
        }
    ],
    sustainabilityScore: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now}
})