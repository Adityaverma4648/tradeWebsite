require("dotenv").config();
const connectDB = require("./config/DB");
const express  = require('express');
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
// const data = require("./data/Data.js");
const Trade = require("./model/Trade")


// express instance
const app = express();
app.use(express.json()); // to accept json data
app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT||5000;

//  path to static directory-----------------------------------------------------------------------------------------------------------------------------------------
const staticPath  = path.join(__dirname, './public');
const staticPath1  = path.join(__dirname, "./data/trade.js");

//  using css in my files - css import

app.use(express.static(staticPath));
app.use(express.static(staticPath1));

// 

app.get("/",(req,res)=>{
    res.render('index.html');
})

app.use("/api",apiRoutes);

const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URI);
       app.listen(PORT,console.log(`SERVER STARTED AT ${PORT}`));
    } catch (error) {
        console.log(`Connection failed : ${error}`)
    }
 
 }
start();
 

