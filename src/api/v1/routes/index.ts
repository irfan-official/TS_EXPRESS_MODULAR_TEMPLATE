import express, { Request, Response } from "express";
import httpStatus from "http-status";
import UserRouter from "../modules/users/user.route";

const router = express.Router();

export const moduleRoutes = [
  {
    path: "/users",
    route: UserRouter,
  },
];

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 */


/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 */

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
