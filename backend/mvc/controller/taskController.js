const Task = require('../model/taskModel')
//get all task
async function getAllTask(req,res){
   const result = await Task.find()
   res.json(result)
}
//add new add
async function postNewTask(req,res){
    const {name} = req.body
    console.log(name)

    const result = await Task.create({name})
    res.json(result)
}

//update 
async function updateTask(req,res) {
    const {id}  = req.params;
    const result = await Task.findByIdAndUpdate(id,{isCompleted:true},{new:true})
    res.json(result)
    
}

//delete
async function deleteTask(req,res) {
    try {
        const {id}  = req.params;
    const result = await Task.findByIdAndDelete(id)
    res.json({message:"deleted"})
    } catch (error) {
        res.json({message:"notdeleted"})
    }
    
}

module.exports = {getAllTask,postNewTask,updateTask,deleteTask}