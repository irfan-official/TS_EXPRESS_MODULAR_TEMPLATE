import express, { Request, Response } from "express";
import httpStatus from "http-status";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes";
import { moduleRoutes } from "./routes";

const app = express();

app.use(
  cors({
    origin: [`http://localhost:${4000}`],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.get("/", (req: Request, res: Response) => {
  return res.status(httpStatus.OK).json({
    success: true,
    code: httpStatus.OK,
    message: "Server is running ...",
    availablePath: moduleRoutes,
  });
});

app.use("/api/v1", router);

export default app;
