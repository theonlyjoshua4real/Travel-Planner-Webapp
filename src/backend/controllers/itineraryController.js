const Itinerary = require('../models/Itinerary');

const createItinerary = async (req, res) => {
    try {
        const {userId, segments, activities, sustainabilityScore} = req.body;

        const newItinerary = new Itinerary({
            userId,
            segments,
            activities,
            sustainabilityScore
        });

        const savedItinerary = await newItinerary.save();
        res.status(201).json({message: 'Itinerary created successfully', itinerary: savedItinerary});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

const getAllItineraries  = async (req, res) => {
    try {
        const {userId} = req.params;

        const itineraries = await Itinerary.find({userId});
        res.status(200).json(itineraries);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

const getItineraryById  = async (req, res) => {
    try{
        const {id} = req.params;
        const itinerary = await Itinerary.findById(id);
        if(!itinerary){
            return res.status(404).json({error: 'Itinerary not found'});
        }
        res.status(200).json(itinerary);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
};

const updateItinerary  = async (req, res) => {
    try {
        const {id} = req.params;
        const {segments, activities, sustainabilityScore} = req.body;
        
        const updatedItinerary = await Itinerary.findByIdAndUpdate(
            id,
            {segments, activities, sustainabilityScore},
            {new: true, runValidators: true}
        );

        if(!updateItinerary){
            return res.status(404).json({error: 'Itinerary not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const deleteItinerary  = async (req, res) => {
    try {
        const {id} = req.params;

        const deletedItinerary = await Itinerary.findByIdAndDelete(id);

        if(!deletedItinerary) {
            return res.status(404).json({error: 'Itinerary not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = {
    createItinerary,
    getAllItineraries,
    getItineraryById,
    updateItinerary,
    deleteItinerary
};

