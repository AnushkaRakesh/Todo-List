//npm install mongoose
const mongoose =require('mongoose');

//connect mongodb to mongoose
mongoose.connect('mongodb://0.0.0.0/todolist_db');
const db=mongoose.connection;

//error 
db.on('error',console.error.bind(console,'error connecting to mongo db'));

//successfully connected
db.once('open',function(){
    console.log('connected to the database to mongo db');
});


//export
module.exports = db;
