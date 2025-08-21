const userModel = require('../models/userModel');

module.exports.registerUser = async (req,res,next) => {
    const {email,password,confirmpassword} = req.body

    const isUserAlready = await userModel.findOne({email});
    if(isUserAlready){
        return res.status(400).json({message: "User Already Exists"})
    }

    const user = await userModel.create({
        email,
        password,
        confirmpassword
    })
    
    return res.status(201).json({message: "Registerd"})

}



