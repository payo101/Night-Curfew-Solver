const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.g9osi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority` , {
            useNewUrlParser: true, useUnifiedTopology: true
        });

        console.log("MongoDB Connection Successful");
    } catch (error) {
        console.error("MongoDB Connection Failed");
        process.exit(1);
    }
}

module.exports = connectDB;