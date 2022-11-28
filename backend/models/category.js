import mongoose from "mongoose";
import { itemSchema } from "./item.js";
import Joi from "joi";

const { Schema } = mongoose;

export const categorySchema = new mongoose.Schema({
  date: {
    type: String,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  totalAmount: Number,
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
});

export const Category = mongoose.model("Category", categorySchema);

function validateCategory(category) {
  const schema = Joi.object({
    date: Joi.string().required(),
    category: Joi.string().required(),
    itemIds: Joi.array().items(Joi.string()),
  });

  const result = schema.validate(category);
  return result;
}

export { validateCategory as validate };
