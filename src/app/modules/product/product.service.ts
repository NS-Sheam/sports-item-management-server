import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = (product: TProduct) => {
  const result = Product.create(product);
  return result;
};

const getAllProducts = () => {
  const result = Product.find();
  return result;
};
const getSingleProduct = (id: string) => {
  const result = Product.findById(id);
  return result;
};
const updateProduct = (id: string, product: TProduct) => {
  const result = Product.findOneAndUpdate({ _id: id }, product, { new: true });
  return result;
};

const deleteProduct = (id: string) => {
  const result = Product.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
