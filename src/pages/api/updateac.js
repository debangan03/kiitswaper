import User from "../../../models/user";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method == "POST") {
        console.log(req.body);
        const {email,phone,year,semester,section}=req.body
        try {
            const users=await User.findOneAndUpdate({email:email},{phone:phone,year:year,semester:semester,section:section})
            res.status(200).json({success:"true",data:users})
        } catch (error) {
            res.status(400).send({success:"false", error: error });
        }
    } else {
        res.status(500).send({ error: "error method" });
    }
};
export default conndb(handler);