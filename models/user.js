const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,

    },
    phone: {
        type: String,
        required:true,

    },
    email: {
        type: String,
        required:true,
    },
    roll: {
        type: Number,
        required:true,

    },
    branch: {
        type: String,
        required:true,

    },
    year: {
        type: String,
        required:true,

    },
    semester: {
        type: String,
        required:true,

    },
    section: {
        type: String,
        required:true,

    },
    section1: {
        type: String,
        default:"empty",

    },
    section2: {
        type: String,
        default:"empty",

    },
    section3: {
        type: String,
        default:"empty",

    },
    section4: {
        type: String,
        default:"empty",

    },
    


}, { timestamps: true })

export default mongoose.models.User || mongoose.model("User", userSchema)