import mongoose from 'mongoose'

const MONGOBD_URL = process.env.MONGOBD_URL;

if(!MONGOBD_URL){
    throw new Error("MONGODB_URI must be defined");
}

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(MONGOBD_URL);
        if(connection.readyState === 1){
            console.log("MongoDB connected");
            return Promise.resolve(true);
        }
    } catch (error) {
        console.log(error)
        return Promise.reject(false);
    }
}