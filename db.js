const mongoose = require("mongoose");

// Mongoose Connection
const connectDB = async () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/LoginAuth") // Removed options
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.error("Error connecting to MongoDB:", err));
};

module.exports = connectDB;
