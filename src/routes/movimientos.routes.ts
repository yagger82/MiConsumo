import { Router } from 'express';
import { getMovimientos, createMovimientos,UpdateMovimientos,borrarMovimientos } from '../controllers/movimientos.controller';
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
 * /api/movimientos:
 *   get:
 *     summary: Lista movimientos
 *     tags: [movimientos]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/movimientos', verifyToken, getMovimientos);

/**
 * @swagger
 * /api/movimientos:
 *   post:
 *     summary: Crear movimientos
 *     tags: [movimientos]
 *     responses:
 *       201:
 *         description: Movimientos creado
 */
router.post('/movimientos', verifyToken, createMovimientos);

/**
 * @swagger
 * /api/movimientos/{id}:
 *   put:
 *     summary: Actualizar movimientos
 *     tags: [movimientos]
 *     responses:
 *       200:
 *         description: Movimientos actualizado
 */
router.put('/movimientos/:id', verifyToken, UpdateMovimientos);

/**
 * @swagger
 * /api/movimientos/{id}:
 *   delete:
 *     summary: Borrar movimientos
 *     tags: [movimientos]
 *     responses:
 *       200:
 *         description: Movimientos eliminado
 */
router.delete('/movimientos/:id', verifyToken, borrarMovimientos);

export default router;


