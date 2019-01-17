const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');

// Creating Express app
const app = express();

// Take raw requests and turns them into useable properties on req.body; extended: true allows posting of nested objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Routes
app.use('/', routes);

// Any route that does not work gets 404'd, and sent to the error handlers below
app.use(errorHandlers.notFound);

// Error Handlers
// app.use(errorHandlers.validationErrors);
if (app.get('env') === 'development') {
    app.use(errorHandlers.developmentErrors);
}
app.use(errorHandlers.productionErrors);


module.exports = app;