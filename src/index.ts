import  express  from "express";
import { logger } from "./middlewares/logger";
import userRoutes from './routes/user.routes';
import categoriaRoutes from './routes/categoria.routes';
import { errorHandler } from "./middlewares/errorHandler";
import * as swaggerUi from 'swagger-ui-express';
//import swaggerDocument  from "./swagger.json";
import swaggerJsdoc from "swagger-jsdoc";
import fs from "fs";
import path from "path";

const app = express(); 
const swaggerDocument = require("./docs/swagger.json");


const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: { title: "miConsumo API", version: "1.0.0" },
  },
  apis: ["./src/routes/**/*.ts", "./src/index.ts"],
});

// guardar en archivo
fs.writeFileSync("./src/swagger.json", JSON.stringify(swaggerSpec, null, 2));

// Ruta de Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument ));

app.use(express.json());
app.use(logger);
app.use('/api', userRoutes);
app.use('/api', categoriaRoutes);




// app.get("/users", (req, res) => {
//   res.json([{ id: 1, name: "Juan" }]);
// });

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
     console.log('Docs Swagger en http://localhost:3000/docs');
});