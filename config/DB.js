const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// const password = "pSMdTF06pZGKiZnp"
const connectDB = async (uri)=>{

    try {
        await mongoose.connect(uri,{
            useNewUrlParser : true,
        });
        console.log('Connected With DB:');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = connectDB;