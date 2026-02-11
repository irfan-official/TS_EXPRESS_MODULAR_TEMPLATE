import express, { Request, Response } from "express";
import httpStatus from "http-status";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    code: httpStatus.OK,
    message: "auth route is working",
  });
});

router.post("/signin", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    code: httpStatus.OK,
    message: "auth is working",
  });
});

router.post("/signup", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    code: httpStatus.OK,
    message: "auth is working",
  });
});

export default router;
