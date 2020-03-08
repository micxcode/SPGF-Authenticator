const jwt = require('jsonwebtoken');

class AuthManager {

    constructor() {
        //Vai haver banco para o autenticador?
        //this.db = new db_manager();
    }

    validateToken(token) {

        jwt.verify(token, process.env.Secret, function (err, decoded) { //Secret armazenada no arquivo .env
            if (err){
                return new Error(err.message);
            }
            else {
                return true;
            }
        });
    }

    validateAction(token, path, method) {

        //Lembrete: O código abaixo é apenas um esboço, ele deverá ser adaptado de acordo com a estrutura do jwt a ser definida.
        jwt.verify(token, process.env.Secret, function (err, decoded) { //Secret armazenada no arquivo .env
            if (err){
                return new Error(err.message);
            }
            else if(decoded.path.indexOf(path) < 0){
                return new Error('Caminho negado.');
            }
            else if(decoded.method.indexOf(method) < 0){
                return new Error('Ação negada.');
            }
            else {
                return true;
            }
        });
    }
}

module.exports = AuthManager;