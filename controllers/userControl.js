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
                res.json({ success: true, result: result })
            })
            .catch(err => {
                res.json({ success: false, result: err })
            })
    },
    update: (req, res) => {
        UserModel.updateOne({_id: req.body._id}, req.body)
        .then(user => {
            if (!user) res.json({success: false, result: "Usuário não existe"});
            res.json(user);
        }).catch(err =>{
            res.json({success: false, result: err})
        });
    },
    retrieve: (req, res)=>{
        UserModel.find().then(result => {
            if (!result){
                res.json({success: false, resulta: "No results found"});
            }
            res.json({success: true, result: result});
        }).catch(err => res.json({success: false, result: err}));
    },
    delete: (req, res)=>{
        UserModel.remove({_id: req.body._id})
        .then(result =>{
            console.log('RESULT DO DELETE', result);
            if (result.n === 0){
                res.json({success: false, result: "Nenhuma conta foi deletada"});    
            }
            res.json({success: true, result: result});
        }).catch(err => res.json({success: false, result: err}));
    }
}