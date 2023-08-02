import User from "../../../models/user";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method == "POST") {
        let email = req.body.email;
        try {
            const users=await User.findOneAndUpdate({email:email},{section:req.body.section,section1:req.body.section1,section2:req.body.section2,section3:req.body.section3,section4:req.body.section4})
            res.status(200).json({success:"true",data:users})
        } catch (error) {
            res.status(400).send({success:"false", error: error });
        }
    } else {
        res.status(201).send({ error: "error method" });
    }
};
export default conndb(handler);