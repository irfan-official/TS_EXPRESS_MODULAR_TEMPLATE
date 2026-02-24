import express, { Request, Response } from "express";
import httpStatus from "http-status";
import validateRequest from "../../middleware/validateRequest";
import { createUserSchema } from "./auth.validation";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    code: httpStatus.OK,
    message: "Hello users",
  });
});

router.get("/test", validateRequest(createUserSchema), (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    code: httpStatus.OK,
    message: "Hello users",
  });
});

export default router;
