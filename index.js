import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express();
dotenv.config()

import authRoutes from './routes/auth.js'
import hotelsRoutes from './routes/hotels.js'
import roomsRoutes from './routes/rooms.js'
import usersRoutes from './routes/users.js'


//MongoDB
const connect = async () => {
  await mongoose.connect(process.env.MONGO);
  console.log("Connected to MongoDB");
}
connect().catch(err => console.log(err));
mongoose.connection.on("disconnected", ()=>{
    console.log('MongoDB Disconnected');
})
mongoose.connection.on("Connect", ()=>{
    console.log('MongoDB Connected');
})


//Middlewares
app.use(
    cors({
        origin: '*'
    })
)

app.use(cookieParser());

app.use(express.json());

app.listen(5500, ()=>{
    console.log("Backend Server Started");
})

app.use('/api/auth', authRoutes);
app.use('/api/hotel', hotelsRoutes);
app.use('/api/room', roomsRoutes);
app.use('/api/user', usersRoutes);

app.use((err, req, res, next)=>{    //Special Error Handling Middleware taking in the 4 parameters
    const errorMessage = err.message || "Something Went Wrong!!!";
    const errorStatus = err.status || 500;
    return res.status(errorStatus).json({
        Success: false,
        Status: errorStatus,
        Message: errorMessage
    })
})
