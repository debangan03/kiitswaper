import Message from "../../../models/message";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method == "POST") {
        
        try {
            const { name,email,section,message } = req.body;
            console.log(req.body);

            const m = new Message({
                name:name,
                email:email, 
                section:section,
                message:message
            });

            const m1 = await m.save();
            console.log(m1);
            res.status(201).json({success:"true",data:m1});
        } catch (error) {
            res.status(400).send({success:"false", error: "erroe" });
        }
    } else {
        res.status(500).send({ error: "error method" });
    }
};
export default conndb(handler);