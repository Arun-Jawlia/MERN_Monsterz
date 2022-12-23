const express = require("express");
const { UserModel } = require("../Models/User.model")
const imageRoutes = express.Router();
const upload = require("../utils/multer")
const cloudinary = require("../utils/cloudinary")


imageRoutes.patch("/updateprofile/:postID", upload.single("image"), async(req,res) => {
    console.log(req.body)
    try {
        const postID = req.params.postID;
        const result = await cloudinary.uploader.upload(req.file.path)
        if(result){
            const payload = {
                about:req.body.about,
                profile_url:result.secure_url,
            }
            await UserModel.findByIdAndUpdate(postID,payload);
            res.send({"Message":"req is Successful", payload})
        }
        else{
            const payload = req.body;
            await UserModel.findByIdAndUpdate(postID,payload);
            res.send({"Message":"req is Successful", payload})
        }
        
    } 
    
    catch (err) {
        console.log(err)
        res.send({"Message":"error while performing this task"})
    }
})

module.exports = imageRoutes;