import swaggerJSDoc from "swagger-jsdoc";
import { Options } from "swagger-jsdoc";
import path from "path";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API Documentation",
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1",
      },
    ],
  },
  apis: ["./src/api/v1/modules/**/*.swagger.yaml"], // Important for TS
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;