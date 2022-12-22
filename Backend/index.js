const express = require("express");
const { connection } = require("./config/db");
const { validator } = require("./middlewares/validator.middleware");
const { userRoutes } = require("./Routes/User.routes");
require("dotenv").config();
const cors = require("cors");
const { authentication } = require("./middlewares/auth.middleware");




const app = express();
app.use(cors({
    origin:"*"
}))


app.use(express.json());

app.get("/", (req,res) => {
    res.send({"Message":"welcome to Homepage"})
})




app.use(validator);
app.use("/", userRoutes);


app.use(authentication)
app.use("/user",require("./Routes/Profilepic.routes"))
app.use("/user", require("./Routes/PostImage.routes"))




app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log("Connection to DB Success");
    } 
    
    catch (err) {
        console.log("Connection to DB Failed");
        console.log(err);
    }

    console.log(`running on port ${process.env.port}`)
});

