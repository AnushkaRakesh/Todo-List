//Require express module
const express =require('express');

//require mongoose module
const db =require('./config/mongoose');

//set up port number
const port =9000;

//Use express module
const app = express();



//use middleware
app.use(express.urlencoded({extended:true}));

//use static files
app.use(express.static("./assets"));

//set up ejs engine
app.set("view engine","ejs");


//routes
app.use(require('./routes/index'));
app.use(require('./routes/todo'));




//Configure express server
app.listen(port,(err)=>{
    if(err){
        console.log('error on express server');
    }
    console.log('Server successfully running on port : ',port);
})