import Message from "../../../models/message";
import User from "../../../models/user";
import SwappedUsers from "../../../models/swappedusers";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method == "POST") {
        
        try {
            const data=await Message.find({$or:[{reciever:req.body.reciever},{reciever:req.body.email},{email:req.body.email},{email:req.body.reciever}]});
            let i,updatestatus=[];
            for(i in data)
            {
                updatestatus[i]=await Message.findByIdAndUpdate(data[i]._id,{status:true});
            }
            const data1=await User.find({$or:[{email:req.body.reciever},{email:req.body.email}]});
            const s1=new SwappedUsers({name:data1[0].name,roll:data1[0].roll,email:data1[0].email,oldsection:data1[0].section,newsection:data1[1].section,swapbuddy:data1[1].email});
            const s2=new SwappedUsers({name:data1[1].name,roll:data1[1].roll,email:data1[1].email,oldsection:data1[1].section,newsection:data1[0].section,swapbuddy:data1[0].email});
            const t1=await s1.save();
            const t2=await s2.save();
            const c1=await User.findOneAndUpdate({email:data1[0].email},{section:data1[1].section,section1:"empty",section2:"empty",section3:"empty",section4:"empty",swapstatus:true});
            const c2=await User.findOneAndUpdate({email:data1[1].email},{section:data1[0].section,section1:"empty",section2:"empty",section3:"empty",section4:"empty",swapstatus:true});           
            res.status(201).json({success:true});
        } catch (error) {
            res.status(500).send({success:false, error: error });
        }
    } else {
        res.status(500).send({ error: "error method" });
    }
};
export default conndb(handler);