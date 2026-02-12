import dotenv from "dotenv";
import path from "path";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is missing in .env");
}

const config = {
  port: process.env.PORT as string,
  node_env: process.env.NODE_ENV as string,

  frontend_url: process.env.FRONTEND_URL as string,
  database_url: process.env.DATABASE_URL as string,

  jwt_access_secret: process.env.JWT_SECRET as string,
  jwt_refresh_secret: process.env.JWT_SECRET as string,
  jwt_access_expires_in: process.env.JWT_SECRET as string,
  jwt_refresh_expires_in: process.env.JWT_SECRET as string,

  email_user: process.env.EMAIL_USER as string,
  email_pass: process.env.EMAIL_PASS as string,

  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID as string,
  aws_secret_key_id: process.env.AWS_SECRET_ACCESS_KEY as string,
  aws_region: process.env.AWS_REGION as string,
  aws_s3_bucket_name: process.env.AWS_S3_BUCKET_NAME as string,

  stripe_secret_key: process.env.STRIPE_SECRET_KEY as string,
  stripe_webhook_secret: process.env.STRIPE_WEBHOOK_SECRET as string,
  stripe_publishable_key: process.env.STRIPE_PUBLISHABLE_KEY as string,

  price1_id: process.env.PRICE1_ID as string,
  price2_id: process.env.PRICE2_ID as string,

  // email_verification_expiry: Number(process.env.EMAIL_VERIFICATION_EXPIRY),

  // cloudinary: {
  //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  //   api_key: process.env.CLOUDINARY_API_KEY as string,
  //   api_secret: process.env.CLOUDINARY_API_SECRET as string,
  // },
};

export default config;
