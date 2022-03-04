// const { MongoClient } = require('mongodb');

// const mongoUrl = ''

// const Database = {
//     connect: (calback) => {
//         return new Promise((accept, reject) => {
//             MongoClient.connect(mongoUrl, {useUnifiedTopology: true}, (err, client) => {
//                 this.dbInstance = client.db();
//                 accept(client);
//             })
//         })
//     }
// }


const {MongoClient, Collection} = require('mongodb'); // const MongoClient = require('mongodb').MongoClient;
const mongoUrl = 'mongodb+srv://UserM:vzsLf2WvaSadVjSn@clusterproyecto.sliuu.mongodb.net/CHAT_DATABASE?retryWrites=true&w=majority';
let database;

module.exports = {
    connect: () =>{
        return new Promise((resolve, reject) => {
            MongoClient.connect(mongoUrl, {useUnifiedTopology:true}, (err, client) => {
                //Error-first callback
                if(err){
                    //Something failed
                    console.log('Algo falló', err);
                }else{
                    // Connected successfully
                    //**console.log('Database: ', db, collection);
                    database = client.db();
                    console.log('Connected sucessfully');
                    resolve();
                }
            });
        })
    },
    selectCollection: (collectionName) => {
        return database.collection(collectionName);
    }
}
