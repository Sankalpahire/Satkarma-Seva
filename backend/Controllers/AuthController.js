const UserModel = require("../models/User");

const signup = async ( req , res)=>{
    try{
        const {name , email , phone , password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(400).json({message:"user already exists"});
        }
        const newUser = new UserModel({name , email , phone , password})
        UserModel.password =await bcrypt.hash(password,10);

        await newUser.save();
        res.status(201).json({message:"sign up completed welcome to satkarma-seva , please login to continue"})

    }catch(err){
        res.status(500).json({message:"Internal Server Error "})
        success:false
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

module.exports ={
    signup ,
    login
}