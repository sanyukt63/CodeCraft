const userModel = require('../models/userModel');
const { validateRegistrationInput } = require('../utils/registrationValidation');
const { normalizeEmail } = require('../utils/normalizeEmail');

module.exports.registerUser = async (req,res,next) => {
    const { password, confirmpassword } = req.body;
    const email = normalizeEmail(req.body.email);
    const validationError = validateRegistrationInput({ email, password, confirmpassword });
    if (validationError) return res.status(400).json({ message: validationError });

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



