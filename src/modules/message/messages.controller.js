const MessagesController = {
    getAll: (req, res) => {
        res.send('will get messages');
    },
    create: (req, res) => {
        res.send('will create a message');
    },
    update: (req, res) => {
        res.send('will update a message');
    },
    delete: (req, res) => {
        res.send('will delete a message');
    }
}

module.exports = MessagesController;