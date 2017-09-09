const express = require('express');
const app = express();
const morgan = require('morgan');
const { port } = require('./config/environment');
const expressLayouts  = require('express-ejs-layouts');
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

app.listen(port, () => console.log(`Express is listening on port ${port}`));
