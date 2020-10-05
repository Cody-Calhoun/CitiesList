const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please include a name."]
    },
    population: {
        type: Number,
        required: [true, "Please provide a city,"]
    },
    
    imageURL: {
        type: String,
        minlength: [5, "Please enter an image that is at least 5 characters."]
    } 
}, { timestamps: true});

const City = mongoose.model('City', CitySchema, 'cities');

module.exports = City;