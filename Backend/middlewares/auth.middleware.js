const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req,res,next) => {
    const token = req.headers.authentication?.split(" ")[1];
console.log("amitsaini",req.body)
    if(token){
        const decoded = jwt.verify(token, process.env.secret_key, (err,decoded) => {
            if(decoded){
               if(req.url == "/user/postimage"){
              
               const username = decoded.username
               const user_id = decoded.user_id
               
               req.body.username = username
               req.body.user_id = user_id
              
                next()
               }

               else{
                next()
               }
            }

            else{
                res.send("Login First")
            }
        })
    }
    else{
        res.send("login first")
    }
}

module.exports = { authentication };
