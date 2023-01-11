import mongoose, { SchemaType, trusted }  from "mongoose";
import { Schema } from "mongoose";

const RoomSchema = new Schema({
    title:{
        type: String, 
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true,
        default: 1
    },
    description: {
        type: String
    },
    roomNumbers: [{
        number: Number,
        unavailableDates: [{type: Date}] 
    }]
}, 
{
    timestamps: true
}
)

// [
//     {number: 101, unavailableDates: []},
//     {number: 102, unavailableDates: []},
//     {number: 103, unavailableDates: []},
//     {number: 104, unavailableDates: []},
//     {number: 105, unavailableDates: []},
//     {number: 106, unavailableDates: []}
// ]

export default mongoose.model("Room", RoomSchema);