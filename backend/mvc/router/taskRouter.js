const express = require('express')
const router = express.Router()
const {getAllTask,postNewTask,updateTask,deleteTask} = require('../controller/taskController')




router.get('/',getAllTask)
router.post('/addtask',postNewTask)
router.put('/update/:id',updateTask)
router.delete('/delete/:id',deleteTask)


module.exports = router