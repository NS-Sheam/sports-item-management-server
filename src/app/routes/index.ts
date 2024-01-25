import { Router } from "express";
import { productRoutes } from "../modules/product/product.routes";

const router = Router();
const moduleRoutes = [
  {
    path: "/products",
    route: productRoutes,
  },
];

moduleRoutes.forEach(({ path, route }) => router.use(path, route));

export default router;
