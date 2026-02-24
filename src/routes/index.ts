import express, { Request, Response } from "express";
import httpStatus from "http-status";
import v1Router from "../api/v1/routes/index"

const router = express.Router();

export const moduleRoutes = [
    {
        path: "/v1",
        route: v1Router,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
