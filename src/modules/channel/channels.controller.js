const Database = require('../../core/database')

const ChannelsController = {
    getAll: (req, res) => {
        //res.send('will get channels');
        const collection = Database.selectCollection('channels');
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
        res.send({});
    },
    update: (req, res) => {
        res.send({});
    }
}

module.exports = ChannelsController;