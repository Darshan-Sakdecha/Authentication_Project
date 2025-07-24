import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Database connected");
    })

    //here connect time passed : mongo_connection_string/database_name
    await mongoose.connect(`${process.env.MONGODB_URI}/Authentication`);
}

export default connectDB;