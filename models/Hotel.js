import mongoose from "mongoose";

const { Schema } = mongoose;

const hotelSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    }, 
    details: {
        type: String
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        unique: true
    },
    photos: [String],
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    cheapestPrice: Number,
    rooms: [String],
    featured: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Hotel', hotelSchema);