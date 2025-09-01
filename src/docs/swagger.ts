import swaggerJsdoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.1",
    info: { title: "miConsumo API", version: "1.0.0" },
  },
  // ajusta a donde tengas tus rutas/comentarios JSDoc
  apis: ["./src/routes/**/*.ts", "./src/index.ts"],
});