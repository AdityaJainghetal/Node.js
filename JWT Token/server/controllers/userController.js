const userModel = require("../models/userModel")
const bcrycpt = require("bcrypt")
const jwt = require("jsonwebtoken");


const userRegistration= async(req,res)=>{
    const {username,email,password} = req.body;

    const salt = await bcrycpt.genSalt(10)
    const hashedPassword = await bcrycpt.hash(password, salt)


    const Data = await userModel.create({
        username:username,
        email:email,
        password:hashedPassword
    })

        res.send("Ok")
}

const userLogin= async(req, res)=>{
    const {email, password} = req.body;
    const User = await userModel.findOne({
        email:email
    })

    if(!User){
        res.status(404).json({
        message: "Email not found",
        status: "404 Not found"
        
        })

        const validPassword = await bcrycpt.compare(
            password,
            User.password
        )
        if(!validPassword){
            res.status(400).json({
                message: "Invalid password",
                status:"400 Bad request"
            })

            return
        }

    }


        const token = jwt.sign({ id: User._id, name:User.name, email:User.email }, "aditya1234");
        res.json({ token, user: { id: User._id, username: User.username } });

        







}


module.exports={
    userRegistration,
    userLogin
}