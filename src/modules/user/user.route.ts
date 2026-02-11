import express, { Request, Response } from "express";
import httpStatus from "http-status";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    code: httpStatus.OK,
    message: "Hello users",
  });
});

export default router;
