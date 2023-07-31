import User from "../../../models/user";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method == "POST") {
        
        try {
            const { name, phone, email, roll, branch, year, semester, section } = req.body;

            const u = new User({
                name:name,
                phone:phone, 
                email:email, 
                roll:roll, 
                branch:branch, 
                year:year, 
                semester:semester, 
                section:section,

            });

            const u1 = await u.save();
            res.status(201).json({success:"true",data:u1});
        } catch (error) {
            res.status(400).send({success:"false", error: error });
        }
    } else {
        res.status(201).send({ error: "error method" });
    }
};
export default conndb(handler);