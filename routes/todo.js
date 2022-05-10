//require router
const router = require('express').Router();

//require model
const TodoList = require('../modules/app');


//routes wil use here....

//Add Todo Router
router.post('/add/todo',(req,res)=>{
    const val = req.body.todo;
    const description = req.body.description;
    // console.log(val);
    TodoList.create({
        todo:val,
        description:description
    },(err,newTodo)=>{
        if(err){
            console.log('error on creation',err);
            return;
        }
        console.log(newTodo);
        return res.redirect('back');
    })

});

//Delete Todo Router
router.get('/delete/todo',(req,res)=>{
    let id=req.query.id;

    //find the todo id in db
    TodoList.findByIdAndDelete(id,function(err){
        if(err){
            console.log("error");
            return;
        }
        return res.redirect('back');
    });

});

//export
module.exports=router;