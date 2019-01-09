import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes/index';
import errorHandlers from './handlers/errorHandlers';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import session from 'express-session';
import connectMongo from 'connect-mongo';
const MongoStore = connectMongo(session);

// express-session (handle sessions)
// connect-mongo (for storing sessions in MongoDB)

// Creating Express app
const app = express();

// Serves static files from public
app.use(express.static(path.join(__dirname, 'public')))

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// Take raw requests and turns them into useable properties on req.body; extended: true allows posting of nested objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        touchAfter: 24 * 3600
    })
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

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