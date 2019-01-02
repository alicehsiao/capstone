import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes/index';

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

export default app;