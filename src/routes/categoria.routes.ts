
import { Router } from 'express';
import { getCategorias, createCategoria,UpdateCategoria,borrarCategoria, filtrarCategoria,ordenarCategoria,paginarCategoria } from '../controllers/categoria.controller';
import { verifyToken } from '../middlewares/auth';
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
router.get('/categorias', verifyToken, getCategorias);


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
router.post('/categorias', verifyToken, createCategoria);

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
router.put('/categorias/:id', verifyToken, UpdateCategoria);


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
router.delete('/categorias/:id', verifyToken, borrarCategoria);

//consulta avanzadas
router.get('/categorias/filter/descripcion/:descripcion', filtrarCategoria);
router.get('/categorias/order', ordenarCategoria);
router.get('/categorias/paginate', paginarCategoria);



export default router;