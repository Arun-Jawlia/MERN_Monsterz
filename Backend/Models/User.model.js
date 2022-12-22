const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    number:String,
    username:String,
    about:String,
    profile_url:String,
}, {
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema);

module.exports = { UserModel };