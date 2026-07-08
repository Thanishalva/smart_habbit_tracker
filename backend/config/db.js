import dns from "dns";
import mongoose from "mongoose";


dns.setDefaultResultOrder("ipv4first");
export const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;

        if (!uri) throw new Error("mongo URI is not defined !");
        const conn = await mongoose.connect(uri);
        console.log(`mongoDB connected : ${conn.connection.host}`);

    } catch (err) {
        console.log("MONGO DB CONNECTION ERROR :", err.message);
        process.exit(1);
    }
};