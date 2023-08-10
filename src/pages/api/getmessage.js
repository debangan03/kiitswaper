import Message from "../../../models/message";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method == "POST") {
        
        try {
            const msgs=await Message.find({reciever:req.body.reciever})
            res.status(201).json({success:true,data:msgs})
        } catch (error) {
            res.status(400).send({success:"false", error: error });
        }
    } else {
        res.status(201).send({ error: "error method" });
    }
};
export default conndb(handler);