var auth_manager = require('../Adapters/auth_manager');

module.exports = (app) => {

    app.post('/validateToken', (req, res) => { //Expected 'token'
        const auth = new auth_manager();

        try{
            let authorized = auth.validateToken(req.body);

            return res.send(authorized);
        }
        catch(e){
            return res.status(500).send(e);
        }
    });

    app.post('/validateAction', (req, res) => { //Expected 'token', 'path', 'method'
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