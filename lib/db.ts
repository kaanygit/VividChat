import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const url=process.env.MONGODB_URL as string;

let connection:typeof mongoose;

const startDB=async()=>{
    if(!connection)connection=await mongoose.connect(url);
    return connection;
};

export default startDB;