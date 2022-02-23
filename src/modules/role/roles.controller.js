const RolesController = {
    getAll: (req, res) => {
        res.send('will get roles');
    },
    create: (req, res) => {
        res.send('will create a role');
    },
    update: (req, res) => {
        res.send('will update a role');
    },
    delete: (req, res) => {
        res.send('will delete a role');
    }
}

module.exports = RolesController;