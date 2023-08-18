const mongoose = require("mongoose");

const swappedSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    roll: {
        type: String,
    },
    email: {
        type: String,
    },
    oldsection: {
        type: String,
    },
    newsection: {
        type:String,
    },
    swapbuddy: {
        type: String,
    }
}, { timestamps: true })

export default mongoose.models.SwappedUsers || mongoose.model("SwappedUsers", swappedSchema)