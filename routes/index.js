//require router
const router = require('express').Router();

//require model
const TodoList = require('../modules/app');

//Fetch Todo
router.get('/',(req,res)=>{
    TodoList.find({},function(err,newTodo){
        if(err){
            console.log("error");
            return;
        }
        return res.render('app',{
            value:newTodo
        });
    });
});

//exports
module.exports = router;