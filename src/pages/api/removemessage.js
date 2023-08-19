import Message from "../../../models/message";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method == "POST") {
        
        try {
            const data=await Message.find({$or:[{reciever:req.body.reciever},{reciever:req.body.email},{email:req.body.email},{email:req.body.reciever}]});
            let i,updatestatus=[];
            for(i in data)
            {
                updatestatus[i]=await Message.findByIdAndDelete(data[i]._id);
            }
            res.status(201).json({success:true});
        } catch (error) {
            res.status(500).send({success:false, error: error });
        }
    } else {
        res.status(500).send({ error: "error method" });
    }
};
export default conndb(handler);