import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: string,
            require: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: string,
            require: true,
            min: 2,
            max: 50,
        },
        email: {
            type: string,
            require: true,
            unique: true,
            max: 50,
        },
        password: {
            type: string,
            require: true,
            min: 5,
        },
        picturePath: {
            type: string,
            default: "",
        },
        friends: {
            type: Array,
            default: [],
        },
        location: string,
        occupation: string,
        viewProfile: Number,


    },
    { timestamps: true }
);
const user = mongoose.model("User", UserSchema);
export default User;