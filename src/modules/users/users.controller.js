const UsersController = {
    getAll: (req, res) => {
        res.send('will get users');
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