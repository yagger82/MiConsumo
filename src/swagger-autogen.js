const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  info: {
    title: 'miConsumo API',
    description: 'Documentación generada automáticamente',
    version: '1.0.0',
  },
  servers: [{ url: 'http://localhost:3000', description: 'Servidor local' }],
};

const outputFile = './src/docs/swagger.json';
const endpointsFiles = [
  './src/index.ts',        // tu entrypoint principal
  './src/routes/*.ts',     // tus rutas en JS
  './src/routes/**/*.<ts>',  // rutas en subcarpetas
  './src/routes/*.ts',     // si usás TypeScript
  './src/routes/**/*.ts',
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log(`✅ swagger.json generado en ${outputFile}`);
});