//Libraries
const express = require('express');
const dotenv = require('dotenv');

//Configuration Files
const connectDB = require('./config/db');

//Route(s)
const store_Route = require('./routes/store');

dotenv.config();// To use Enviroment variables
connectDB();//To Establish connection with the mongo Database

const app = express();
app.use(express.static('../frontend')); //for enabling server to serve static(HTML , CSS ...) files
//app.set('view engine' , 'ejs');
app.use(express.json());//Allows use to use json objects

const PORT = process.env.PORT;

app.use('/store' , store_Route);//everything related to products

app.listen(PORT , () => {
    console.log(`Server is Running on PORT ${PORT}`);
})