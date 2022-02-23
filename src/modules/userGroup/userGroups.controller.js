const userGroupsController = {
    getAll: (req, res) => {
        res.send('will get userGroups');
    },
    create: (req, res) => {
        res.send('will create a userGroup');
    },
    update: (req, res) => {
        res.send('will update a userGroup');
    },
    delete: (req, res) => {
        res.send('will delete a userGroup');
    }
}

module.exports = userGroupsController;