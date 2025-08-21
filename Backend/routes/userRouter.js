const express = require('express');
const router = express.Router();
const userController= require('../controller/userController')

router.post('/register', userController.registerUser )

router.post('/login',(req,res) => {
    
})

router.post('/logout',(req,res) => {

})

module.exports = router;
