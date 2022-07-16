import Item from "../models/Item.js";
export const getItems = async (req, res) => {
  try {
    const { title } = req.body;
    console.log({ title });
    const item = await Item.find({ title });
    return res.json(item);
  } catch (error) {
    console.log(error);
    res.send({ message: error.message });
  }
};
