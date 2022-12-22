const express = require("express");
const { ImageModel } = require("../Models/PostImage.model.js");
const postImageRoutes = express.Router();
const upload = require("../utils/multer")
const cloudinary = require("../utils/cloudinary");




postImageRoutes.post("/postimage", upload.single("image"), async(req,res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const newPost = new ImageModel({
            title:req.body.title,
            desc:req.body.desc,
            user_id:req.body.user_id,
            username:req.body.username,
            name:req.body.name,
            image_url:result.secure_url,
        })
        await newPost.save();
        res.send({"Message":"req is Successful", newPost})
    } 
    
    catch (err) {
        console.log(err)
        res.send("error")
    }
})


postImageRoutes.get("/",async(req,res) => {
    try {
        const data = await ImageModel.find();
        res.send(data)
    } 
    
    catch (err) {
        console.group(err)
        res.send({"Message":"Something went wrong"})
    }
})


postImageRoutes.get("/profile/:user_id",async(req,res) => {
    try {
        const user_id = req.params.user_id
        const data = await ImageModel.find({user_id:user_id});
        res.send(data)
    } 
    
    catch (err) {
        console.group(err)
        res.send({"Message":"Something went wrong"})
    }
})



postImageRoutes.patch("/editpost/:post_id", async(req,res) => {
    try {
        const post_id = req.params.post_id
        const user_id = req.body.user_id
        const payload = await ImageModel.findOne({_id:post_id})
        if(user_id !==payload.user_id){
            res.send("You are not authorized for this operation")
        }
        else{
            await ImageModel.findByIdAndUpdate({_id:post_id},payload)
            res.send({"Message":"Edited Succesfully",payload})
        }
    } 
    
    catch (error) {
        console.log(err)
        res.send("eror while pserforming this task")
    }
})


postImageRoutes.delete("/delete/:post_id", async(req,res) => {
    try {
        const post_id = req.params.post_id
        const user_id = req.body.user_id
        const payload = await ImageModel.findOne({_id : post_id})
        if(user_id !==payload.user_id){
            res.send("You are not authorized for this operation")
        }
        else{
            await ImageModel.findByIdAndDelete({_id : post_id})
            res.send({"Message":"Deleted Succesfully"})
        }
    } 
    
    catch (error) {
        console.log(err)
        res.send("eror while pserforming this task")
    }
})




module.exports = postImageRoutes;