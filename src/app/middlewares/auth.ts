import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) return new Error("You are not authorized");
    const decoded = jwt.verify(token, config.jwt_secret as string);
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
