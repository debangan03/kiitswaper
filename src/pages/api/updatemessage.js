import Message from "../../../models/message";
import User from "../../../models/user";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method == "POST") {
        
        try {
            const data=await Message.find({$or:[{reciever:req.body.reciever},{reciever:req.body.email},{email:req.body.email},{email:req.body.reciever}]});
            let i,updatestatus=[],user=[];
            for(i in data)
            {
                updatestatus[i]=await Message.findByIdAndUpdate(data[i]._id,{status:true});
            }
            const data1=await User.find({$or:[{email:req.body.reciever},{email:req.body.email}]});
            for(let j in data1)
            {
                user[j]=await User.findOneAndUpdate({email:data[j].email},{section1:"empty",section2:"empty",section3:"empty",section4:"empty"});

            }

            
            res.status(201).json({success:true});
        } catch (error) {
            res.status(400).send({success:false, error: error });
        }
    } else {
        res.status(201).send({ error: "error method" });
    }
};
export default conndb(handler);