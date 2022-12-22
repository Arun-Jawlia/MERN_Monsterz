const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/User.model");
require("dotenv").config();
const saltRounds = 4;

const userRoutes = express.Router();

userRoutes.post("/signup", async(req,res) => {
    const {name,email,password,number,username} = req.body;

    const userEmail = await UserModel.findOne({email});
    const userNumber = await UserModel.findOne({number});
    const userName = await UserModel.findOne({username});


    if(userEmail && userNumber && userName){
       
        res.send({"Message":"Already Registered, Try to Login"})
    }

    else if(userEmail && userNumber){
       
        res.send({"Message":"Email and Number are already used"})
    }

    else if(userEmail && userName){
       
        res.send({"Message":"Email and username are already used"})
    }

    else if(userNumber && userName){
       
        res.send({"Message":"Number and username are already used"})
    }

   else if(userEmail){
        res.send({"Message":"This Email is already registered"})
        
    }

    else if(userName){
        res.send({"Message":"This username is already taken, try something Unique"})
        
    }

    else if(userNumber){
        
        res.send({"Message":"this Mobile Number is already registered"})
    }
    
    else{

        try {
            bcrypt.hash(password,saltRounds, async(err,myPassword) => {
                const user = new UserModel({name,email,password:myPassword,number,username})
                await user.save();
                res.send({"Message":"Signup Successfully"})
            })
        } 
        
        catch (err) {
            console.log(err);
            res.send({"Message":"Signup failed, try again"})
        }
    }
})



userRoutes.post("/login", async(req,res) => {

    try {
        
        const {email,password,username,number} = req.body;
        const byEmail = await UserModel.find({email});
        const byUsername = await UserModel.find({username})
        const byUsernumber = await UserModel.find({number})

        if(byEmail.length>0){
            const myPassword = byEmail[0].password;
            console.log(myPassword);
            bcrypt.compare(password, myPassword, (err,result) => {
                if(result){
                    const token = jwt.sign({"username":byEmail[0].username,"user_id":byEmail[0]._id}, process.env.secret_key, {expiresIn:"1d"})
                    res.send({token, byEmail, "Message":"Logged-In Successfully"});
                }
                else{
                    res.send({"Message":"The Password you Entered is Wrong"})
                    
                }
            })
        }

        else if(byUsername.length>0){
            const myPassword = byUsername[0].password;
            console.log(myPassword);
            bcrypt.compare(password, myPassword, (err,result) => {
                if(result){
                    const token = jwt.sign({"username":byUsername[0].username,"user_id":byUsername[0]._id}, process.env.secret_key, {expiresIn:"1d"})
                    res.send({token, byUsername, "Message":"Logged-In Successfully"});
                }
                else{
                    res.send({"Message":"The Password you Entered is Wrong"})
                    
                }
            })
        }

        else if(byUsernumber.length>0){
            const myPassword = byUsernumber[0].password;
            console.log(myPassword);
            bcrypt.compare(password, myPassword, (err,result) => {
                if(result){
                    const token = jwt.sign({"username":byUsernumber[0].username,"user_id":byUsernumber[0]._id}, process.env.secret_key, {expiresIn:"1d"})
                    res.send({token, byUsernumber, "Message":"Logged-In Successfully"});
                }
                else{
                    res.send({"Message":"The Password you Entered is Wrong"})
                    
                }
            })
        }

        else{
            res.send({"Message":"User not found"});
        }
    } 
    
    catch (err) {
        console.log(err)
        res.send({"Message":"Login failed, Please try again later"});
    }
})

module.exports = { userRoutes }