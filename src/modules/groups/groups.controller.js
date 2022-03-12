const GroupsController = {
    getAll: (req, res) => {
        res.send('will get Groups');
    },
    create: (req, res) => {
        res.send('will create a Group');
    },
    update: (req, res) => {
        res.send('will update a Group');
    },
    delete: (req, res) => {
        res.send('will delete a Group');
    }
}

module.exports = GroupsController;