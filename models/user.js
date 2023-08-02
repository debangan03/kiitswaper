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
        default:"",

    },
    section1: {
        type: String,
        default:"",

    },
    section2: {
        type: String,
        default:"",
        default:"",

    },
    section3: {
        type: String,
        default:"",

    },
    section4: {
        type: String,
        default:"",

    },
    


}, { timestamps: true })

export default mongoose.models.User || mongoose.model("User", userSchema)