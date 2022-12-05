import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    Description: {
        type: String,
    },
    image: {
        type: String
    }
})

const userModel = mongoose.model('UsersDB', userSchema);
export default userModel;

