const express = require("express");
const bodyParser = require('body-parser');
const app = express();



//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes
app.use('/estudiantes',require('./routes/estudiantes'));


//Starting server
app.listen(app.get('port'), ()=>{
    console.log("Lister on port", app.get('port'));
});