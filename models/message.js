const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
    },
    section: {
        type: String,
    },
    message: {
        type:String,
    },
}, { timestamps: true })

export default mongoose.models.Message || mongoose.model("Message", messageSchema)