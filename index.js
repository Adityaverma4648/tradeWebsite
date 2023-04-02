require("dotenv").config();
const connectDB = require("./config/DB");
const express  = require('express');
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const https = require("https");


// express instance
const app = express();
app.use(express.json()); // to accept json data
app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT||5000;

//  path to static directory-----------------------------------------------------------------------------------------------------------------------------------------
const staticPath  = path.join(__dirname, './public');
//  using css in my files - css import

app.use(express.static(staticPath));

// 

app.get("/",(req,res)=>{
    res.render('index.html');
})

app.use("/api",apiRoutes);
const start = async ()=>{
    try {
       app.listen(PORT,console.log(`SERVER STARTED AT ${PORT}`));
    } catch (error) {
        console.log(`Connection failed : ${error}`)
    }
 
 }
 start();
 