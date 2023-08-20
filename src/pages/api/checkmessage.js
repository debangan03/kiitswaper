import Message from "../../../models/message";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const data = await Message.find({
        $or: [
          {
            $and: [{ reciever: req.body.reciever }, { email: req.body.email }],
          },
          {
            $and: [{ reciever: req.body.email }, { email: req.body.reciever }],
          },
        ],
      });
 
      if (data.length>0) {
        res.status(201).json({ success: true ,data});
      } else {
        res.status(201).json({ success: false,data });
      }
    } catch (error) {
      res.status(500).send({ success: false, error: error });
    }
  } else {
    res.status(500).send({ error: "error method" });
  }
};
export default conndb(handler);
