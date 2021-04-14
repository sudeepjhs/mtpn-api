const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
// Endpoints of the Api

//To add User
router.post('/addUser', userController.addUser);
//To remove User
router.delete('/deleteUser',userController.removeUser);
//To view all user
router.get('/viewUser', userController.viewUser);
//To update User
router.patch('/editUser', userController.updateUser);

module.exports = router;