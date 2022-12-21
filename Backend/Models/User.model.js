const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    number:String,
    username:String,
    about:String,
    profilePic:{
        data: Buffer,
        contentType: String
    }
}, {
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema);

module.exports = { UserModel };