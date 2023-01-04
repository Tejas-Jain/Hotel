import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
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


//Express Server
app.use(express.json());

app.listen(5500, ()=>{
    console.log("Backend Server Started");
})

app.use('/api/auth', authRoutes);
app.use('/api/hotels', hotelsRoutes);
app.use('/api/rooms', roomsRoutes);
app.use('/api/users', usersRoutes);

