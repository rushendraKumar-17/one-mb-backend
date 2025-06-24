import mongoose from "mongoose";
// mongodb+srv://rushendra:<db_password>@cluster0.al7rzbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://rushendra:rushendra17@cluster0.al7rzbo.mongodb.net/
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://rushendra:rushendra17@cluster0.al7rzbo.mongodb.net/");
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;