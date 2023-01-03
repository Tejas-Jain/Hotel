import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express();
dotenv.config()


//MongoDB
const connect = async () => {
  await mongoose.connect(process.env.MONGO);
  console.log("Connected to MongoDB");
}
connect().catch(err => console.log(err));
mongoose.connection.on("disconnected", ()=>{
    console.log('MongoDB Disconned');
})
mongoose.connection.on("Connect", ()=>{
    console.log('MongoDB Connecte');
})

app.listen(8000, ()=>{
    connect();
    console.log("Listening");
})