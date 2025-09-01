
import { Router } from 'express';
import { getCategorias, createCategoria,UpdateCategoria,borrarCategoria, filtrarCategoria,ordenarCategoria,paginarCategoria } from '../controllers/categoria.controller';
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Categorias
 *   description: Operaciones sobre Categorias
 */
/**
 * @swagger
 * /api/categorias:
 *   get:
 *     summary: Lista categorias
 *     tags: [categorias]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/categorias', getCategorias);


/**
 * @swagger
 * /api/Categoria:
 *   post:
 *     summary: Crear Categoria
 *     tags: [Categorias]
 *     responses:
 *       201:
 *         description: Categoria creada
 */
router.post('/categorias', createCategoria);

/**
 * @swagger
 * /api/Categoria:
 *   post:
 *     summary: Crear Categoria
 *     tags: [Categorias]
 *     responses:
 *       201:
 *         description: Categoria creada
 */
router.put('/categorias/:id', UpdateCategoria);


/**
 * @swagger
 * /api/Categoria:
 *   post:
 *     summary: Actualizar Categoria
 *     tags: [Categorias]
 *     responses:
 *       201:
 *         description: Categoria creada
 */
router.delete('/categorias/:id', borrarCategoria);

//consulta avanzadas
router.get('/categorias/filter/descripcion/:descripcion', filtrarCategoria);
router.get('/categorias/order', ordenarCategoria);
router.get('/categorias/paginate', paginarCategoria);



export default router;