import express, { Request, Response } from "express";
import httpStatus from "http-status";
import UserRouter from "../modules/user/user.route";

const router = express.Router();

export const moduleRoutes = [
  {
    path: "/users",
    route: UserRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
