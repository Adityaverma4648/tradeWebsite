require("dotenv").config();
const express  = require('express');
// express instance
const app = express();
app.use(express.json()); // to accept json data
app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT||5000;

const start = async ()=>{
    try {
        // await connectDB(process.env.MONGODB_URI);
       app.listen(PORT,console.log(`SERVER STARTED AT ${PORT}`));
    } catch (error) {
        console.log(`Connection failed : ${error}`)
    }
 
 }
 start();
 