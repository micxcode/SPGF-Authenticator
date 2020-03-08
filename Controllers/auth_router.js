var auth_manager = require('../Adapters/auth_manager');
var validate = require('../Validators/auth_validator');

module.exports = (app) => {

    app.post('/validateToken', validate.authenticate, (req, res) => { //Expected 'token'
        const auth = new auth_manager();

        try{
            let authenticated = auth.validateToken(req.body);

            return res.send(authenticated);
        }
        catch(e){
            return res.status(500).send(e);
        }
    });

    app.post('/validateAction', validate.authorizate, (req, res) => { //Expected 'token', 'path', 'method'
        const auth = new auth_manager();

        try{
            let authorized = auth.validateAction(req.body);
            
            return res.send(authorized);
        }
        catch(e){
            return res.status(500).send(e);
        }
    });
}