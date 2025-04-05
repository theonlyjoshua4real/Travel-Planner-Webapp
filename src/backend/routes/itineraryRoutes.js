const express = require('express');
const {
    createItinerary,
    getAllItineraries,
    getItineraryById,
    updateItinerary,
    deleteItinerary
} = require('../controllers/itineraryController');

const router = express.Router();

// Create a new itinerary
router.post('/create', createItinerary);

// Get all itineraries for a specific user
router.get('/:userId', getAllItineraries);

// Get a single itinerary by its ID
router.get('/:id', getItineraryById);

// Update an itinerary by its ID
router.put('/:id', updateItinerary);

// Delete an itinerary by its ID
router.delete('/:id', deleteItinerary);

module.exports = router;