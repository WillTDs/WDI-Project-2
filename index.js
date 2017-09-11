const express = require('express');
const app = express();

const User = require('./models/user');
const morgan = require('morgan');
const { dbURI, port, secret } = require('./config/environment');
const expressLayouts  = require('express-ejs-layouts');
const mongoose = require('mongoose');
const methodOverride  = require('method-override');
const bodyParser = require('body-parser');
const router = require('./config/routes');
const flash = require('express-flash');
const session = require('express-session');
const userAuth = require('./lib/userAuth');

mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true });

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false
}));

app.use(userAuth);
app.use(flash());

app.use(router);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
