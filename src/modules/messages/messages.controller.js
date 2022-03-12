const MessagesController = {
    getAll: (req, res) => {
        const message = new Message();
        message.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const message = new Message();
        message.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
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