import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes/index';
import errorHandlers from './handlers/errorHandlers';
// import models
import './models/FoodJoint';

// Creating Express app
const app = express();

// Serves static files from public
app.use(express.static(path.join(__dirname, 'public')))

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


export default app;