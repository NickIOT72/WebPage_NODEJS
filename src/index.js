console.log("Server Works");

const express = require('express');
const app = express();
const path = require('path');
const indexRoute = require('./routes/index');

// settings
app.set('port', 4000);
app.set('views',path.join(__dirname,'views'))
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');


//middlewares


//routes
app.use(indexRoute);

//Static files
app.use(express.static(path.join(__dirname,'public')));

// listenig the server
app.listen(app.get('port'), () => {
    console.log("Server on port ", app.get('port'));
});