const express = require('express');
const path = require('path');
const Database = require('./src/core/database')

//Load app routes
const apiRoutes = require('./src/routes');

// init app
const app = express();
const port = process.env.PORT || 3000;

// Use route middlewares
app.use('/assets', express.static(path.join(__dirname, 'public')));

//Set main endpoint
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'src', 'index.html');
    res.sendFile(indexPath);
    // res.send('hola mundo');
});


//MASTER_USER:SsbkKclBpSH5uLd8
//Connect to database
Database.connect().then(() => {
    // Listen to port
    app.listen(port, function () {
        console.log(`app is running in port ${port}...`);
    });
});