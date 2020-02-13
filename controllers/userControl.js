const UserModel = require('../models/UserModel');

module.exports = {
    create: (req, res) => {
        let user = new UserModel({
            forename: req.body.forename,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            team: req.body.team
        });
        // esse metodo salva ou update o model que estamos criando acima
        user.save()
            .then(result => {
                res.json({ susceee: true, result: result })
            })
            .catch(err => {
                res.json({ success: false, result: err })
            })


    }
}