import mongoose from "mongoose";
const itemSchema = mongoose.Schema(
  {
    title: {type: String},
    subtitle: {type: String},
    image: {type: String},
    type: {type: String}
  },
  { timestamps: true }
);
const Item = mongoose.model("Item", itemSchema);
export default Item;