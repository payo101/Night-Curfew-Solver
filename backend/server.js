//Libraries
const express = require('express');
const app = express();

app.use(express.json());//Allows use to use json objects
const dotenv = require('dotenv');

//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Configuration Files
const connectDB = require('./config/db');
const store_Route = require('./routes/store');
const login = require('./routes/login');

dotenv.config();// To use Enviroment variables
connectDB();//To Establish connection with the mongo Database

const PORT = process.env.PORT;

app.use('/login', login); //login route
app.use(express.static('../frontend')); //for enabling server to serve static(HTML , CSS ...) files
//app.set('view engine' , 'ejs');
app.use(express.json());//Allows use to use json objects

const PORT = process.env.PORT;

app.use('/store' , store_Route);//everything related to products

app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`);
})