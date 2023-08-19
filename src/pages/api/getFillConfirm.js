import User from "../../../models/user";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method == "POST") {
        
        try {
            const users=await User.findOne({email:req.body.email})
            
            if(users){
                res.status(200).json({success:true,msg:"Found"})
            }
            else{
                res.status(200).json({success:false,msg:"Not Found"})
            }
        } catch (error) {
            res.status(400).send({success:false, error: error });
        }
    } else {
        res.status(201).send({ error: "error method" });
    }
};
export default conndb(handler);