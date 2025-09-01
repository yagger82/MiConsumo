// src/swagger.ts
import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

const router = Router();

// lee el archivo generado
const specPath = path.resolve(__dirname, "swagger-output.json");
const swaggerDocument = JSON.parse(fs.readFileSync(specPath, "utf8"));

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;