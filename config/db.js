import mongoose from "mongoose";

async function connect(req, res) {
    try {
        const URL = process.env.MONGO_URI;
        await mongoose.connect(URL);
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

export default connect;