exports.catchErrors = fn => (req, res, next) => {
    fn(req, res, next). catch(next);
};

exports.notFound = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};

// Send back validation errors as json
// exports.validationErrors = (err, req, res, next) => {
//     if (!err.errors) return next(err);
//     res.format({
//         'application/json': () => res.json(err.errors)
//     });
// };

exports.developmentErrors = (err, req, res, next) => {
    err.stack = err.stack || '';
    const errorDetails = {
        message: err.message,
        status: err.status
    };
    res.status(err.status || 500);
    res.format({
        'application/json': () => res.json(errorDetails)
    });
};

exports.productionErrors = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json('error', {
        message: err.message,
        error: {}
    });
};