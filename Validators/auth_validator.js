function authenticate(req, res, next){
    req.checkBody('token', 'Token vazio.').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        var response = { errors: [] };
        errors.forEach(function (err) {
            response.errors.push(err.param + ': ' + err.msg);
        });

        return res.status(400).json(response);
    }

    return next();
}

function authorizate(req, res, next){
    req.checkBody('token', 'Token vazio.').notEmpty();

    req.checkBody('path', 'Path vazio.').notEmpty();

    req.checkBody('method', 'Method vazio.').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        var response = { errors: [] };
        errors.forEach(function (err) {
            response.errors.push(err.param + ': ' + err.msg);
        });

        return res.status(400).json(response);
    }

    return next();
}

module.exports = {
    authenticate: authenticate,
    authorizate: authorizate
}