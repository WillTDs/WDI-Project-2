const express = require('express');
const app = express();
const morgan = require('morgan');
const { dbURI, port } = require('./config/environment');
const expressLayouts  = require('express-ejs-layouts');
const mongoose = require('mongoose');
const methodOverride  = require('method-override');
const bodyParser = require('body-parser');
const routes = require('./config/routes');

mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true });

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(routes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.listen(port, () => console.log(`Express is listening on port ${port}`));
