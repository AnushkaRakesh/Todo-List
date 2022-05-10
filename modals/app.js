//require mongoose module
const mongoose = require('mongoose');

//create Schema
const todoSchema = new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

//export 
const TodoList = new mongoose.model("Todo",todoSchema);
module.exports = TodoList;
