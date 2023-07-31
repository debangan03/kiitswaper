import User from "../../../models/user";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method == "GET") {
        
        try {
            const users=await User.find()
            res.status(200).json({success:"true",data:users})
        } catch (error) {
            res.status(400).send({success:"false", error: error });
        }
    } else {
        res.status(201).send({ error: "error method" });
    }
};
export default conndb(handler);