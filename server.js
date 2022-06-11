const express = require('express');
const App = express();
const PORT = process.env.PORT || 3000;

//Connect Db;
const connect = require('./config/db');
connect();

//Enable json data
App.use(express.json());

//Router
App.use("/api/v1/addProduct",require('./routes/addProduct')) //Add Product
App.use("/api/v1/",require('./routes/getProducts')); //Get Products 
App.use("/api/v1/searchProducts?:search",require('./routes/searchProducts')); //Search Products 
App.use("/api/v1/updateProduct",require('./routes/updateProduct')); //update Product
App.use("/api/v1/deleteProduct?:id",require('./routes/deleteProduct')); //delete Product


App.listen(PORT,()=>{console.log(`Running On ${PORT}`)});