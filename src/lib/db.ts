import dotenv from "dotenv";
import { prisma } from "./prisma";

dotenv.config();

async function dbConnection() {
    try {
        await prisma.$connect();
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection failed!", error);
    }
}

export default dbConnection;