const User = require('./user.model')

const UsersController = {
    getAll: (req, res) => {
        //res.send('will get users');
        const user = new User();
        user.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const user = new User();
        user.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        res.send('will create a user');
    },
    update: (req, res) => {
        res.send('will update a user');
    },
    delete: (req, res) => {
        res.send('will delete a user');
    }
}


module.exports = UsersController;