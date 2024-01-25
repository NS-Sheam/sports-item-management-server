import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
  },
  brand: {
    type: String,
  },
  size: {
    type: String,
  },
  material: {
    type: String,
  },
  color: {
    type: String,
  },
  condition: {
    type: String,
  },
  weight: {
    type: String,
  },
  style: {
    type: String,
  },
});

export const Product = model<TProduct>("Product", productSchema);
