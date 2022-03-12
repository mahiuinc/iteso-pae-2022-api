const RoomsController = {
    getAll: (req, res) => {
        res.send('will get rooms');
    },
    create: (req, res) => {
        res.send('will create a room');
    },
    update: (req, res) => {
        res.send('will update a room');
    },
    delete: (req, res) => {
        res.send('will delete a room');
    }
}

module.exports = RoomsController;