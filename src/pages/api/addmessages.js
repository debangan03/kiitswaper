import Message from "../../../models/message";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
    if (req.method == "POST") {
        
        try {
            const { name,roll,email,phone,section,message,reciever } = req.body;
            console.log(name,roll,email,phone,section,message,reciever)
            const m = new Message({
                name:name,
                roll:roll,
                email:email, 
                phone:phone,
                section:section,
                message:message,
                reciever:reciever
            });

            const m1 = await m.save();
            res.status(201).json({success:"true",data:m1});
            //serverPusher.trigger('messages','new-message',m1);
        } catch (error) {
            res.status(400).send({success:"false", error: "erroe" });
        }
    } else {
        res.status(500).send({ error: "error method" });
    }
};
export default conndb(handler);