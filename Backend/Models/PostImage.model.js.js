const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    title:String,
    desc:String,
    user_id:String,
    username:String,
    image_url:String,
},{
    versionKey:false
})

const ImageModel = mongoose.model("postedimages",imageSchema);

module.exports = { ImageModel };