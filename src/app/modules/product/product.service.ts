import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateProduct = async (id: string, product: TProduct) => {
  const result = await Product.findOneAndUpdate({ _id: id }, product, {
    new: true,
  });
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
