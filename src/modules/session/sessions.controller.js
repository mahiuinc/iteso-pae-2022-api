const SessionsController = {
    getAll: (req, res) => {
        res.send('will get sessions');
    },
    create: (req, res) => {
        res.send('will create a session');
    },
    update: (req, res) => {
        res.send('will update a session');
    },
    delete: (req, res) => {
        res.send('will delete a session');
    }
}

module.exports = SessionsController;