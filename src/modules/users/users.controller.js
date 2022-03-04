const Database = require('../../core/database')

const UsersController = {
    getAll: (req, res) => {
        //res.send('will get users');
        const collection = Database.selectCollection('users');
        collection.find({}).toArray(( err, results) => {
            if(err){
                console.log('Algo falló ', err)
            }else{
                console.log('Resultados: ', results);
                res.send(results);
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