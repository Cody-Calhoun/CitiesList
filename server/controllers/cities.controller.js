const City = require('../models/City.model');

module.exports = {

    getAll(_, res){
        City.find()
            .then(cities => res.json(cities))
    },

    create(req,res){
        City.create(req.body)
            .then(city => res.json(city))
            .catch(err => res.json({error:err}));
    },

    getOne(req,res){
        const {cityId} = req.params;

        City.findById(cityId)
            .then(city => res.json(city))
            .catch(err => res.json({error:err}));
    },

    update(req,res){
        const {cityId} = req.params;

        City.findByIdAndUpdate(
            cityId, 
            {
                name: req.body.name, 
                population: req.body.population, 
                imageURL: req.body.imageURL
            },    
            {runValidators:true, new: true})
            .then(city => res.json(city))
            .catch(err => res.json({error:err}))
    },

    delete(req,res){
        const {cityId} = req.params;

        City.findByIdAndDelete(cityId)
            .then(() => res.json({status: 'success'}))
            .catch(err => res.json(err));
    }
}