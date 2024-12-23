const Joi = require('joi')
const { default: ForgotPassword } = require('../../frontend/src/Components/Forms/Auth/ForgotPassword')

const signupValidation =( req ,res ,next ) =>{
    const schema = Joi.object({
        name : Joi.string().min(3).max(100).required(),
        email : Joi.string().email().required(),
        phone : Joi.number().min(10).max(10).required(),
        Password : Joi.string().min(4).max(100).required()
});

const {error} =schema.validate(req.body);
if(error){
    return res.status(400).json({error:error.details[0].message});
}
next();
}

const loginValidation =(req,res,next) =>{
    const schema = Joi.object({
        email : Joi.string().email().required(),
        Password : Joi.string().min(4).max(100).required()
});

const {error} =schema.validate(req.body);
if(error){
    return res.status(400).json({message: "something went wrong please try again" , error});
}
next();
}

module.exports = {signupValidation,loginValidation}
