const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

require('./config/mongoose.config');
const citiesRoutes= require('./routes/cities.routes');

citiesRoutes(app);

app.listen(8000)