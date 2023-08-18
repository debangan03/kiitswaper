import SwappedUsers from "../../../models/swappedusers";
import User from "../../../models/user";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method == "POST") {
        
        try {
            const data=await User.find({$or:[{email:req.body.reciever},{email:req.body.email}]});

            const s1=new SwappedUsers({name:data[0].name,roll:data[0].roll,email:data[0].email,oldsection:data[0].section,newsection:data[1].section,swapbuddy:data[1].email});
            const s2=new SwappedUsers({name:data[1].name,roll:data[1].roll,email:data[1].email,oldsection:data[1].section,newsection:data[0].section,swapbuddy:data[0].email});
            const t1=await s1.save();
            const t2=await s2.save();
            res.status(201).json({success:true,t1,t2});
        } catch (error) {
            res.status(400).send({success:false, error: error });
        }
    } else {
        res.status(201).send({ error: "error method" });
    }
};
export default conndb(handler);