const citiesCtl = require('../controllers/cities.controller');

module.exports = app => {
    app.post('/api/cities', citiesCtl.create);
    app.get('/api/cities', citiesCtl.getAll);
    app.get('/api/cities/:cityId', citiesCtl.getOne);
    app.put('/api/cities/:cityId', citiesCtl.update);
    app.delete('/api/cities/:cityId', citiesCtl.delete);
    
}