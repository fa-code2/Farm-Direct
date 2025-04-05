import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
        min: 100000,
        max: 999999
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 12
    }
},{
    timestamps: true
});
 const Profile = mongoose.model('Profile',profileSchema);

export default Profile;
