import dotenv from "dotenv";
import path from "path";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is missing in .env");
}

const config = {
  database_url: process.env.DATABASE_URL as string,
  base_url: process.env.BASE_URL as string,
  port: process.env.PORT as string,
  node_env: process.env.NODE_ENV as string,
  jwt_secret: process.env.JWT_SECRET as string,
  jwt_expires_in: (process.env.JWT_EXPIRES_IN as string) || "7d",
  // email_verification_expiry: Number(process.env.EMAIL_VERIFICATION_EXPIRY),

  // cloudinary: {
  //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  //   api_key: process.env.CLOUDINARY_API_KEY as string,
  //   api_secret: process.env.CLOUDINARY_API_SECRET as string,
  // },
};

export default config;
