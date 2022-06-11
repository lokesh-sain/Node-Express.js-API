require('dotenv').config();
const mongoose = require('mongoose');

function connect_db(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL,{useNewUrlParser:true});
    const establishConnection = mongoose.connection;
    establishConnection.once('open',()=>{
        console.log('Database Connected');
    }).on('error',(err)=>{
        console.log(err);
        throw err;
    })
}

module.exports=connect_db;