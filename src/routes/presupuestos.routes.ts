import { Router } from 'express';
import { getPresupuestos, createPresupuestos,UpdatePresupuestos,borrarPresupuestos } from '../controllers/presupuestos.controller';
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
 *     summary: Lista presupuestos
 *     tags: [presupuestos]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/presupuestos', verifyToken, getPresupuestos);

/**
 * @swagger
 * /api/presupuestos:
 *   post:
 *     summary: Crear presupuestos
 *     tags: [presupuestos]
 *     responses:
 *       201:
 *         description: Presupuesto creado
 */
router.post('/presupuestos', verifyToken, createPresupuestos);

/**
 * @swagger
 * /api/presupuestos/{id}:
 *   put:
 *     summary: Actualizar presupuestos
 *     tags: [presupuestos]
 *     responses:
 *       200:
 *         description: Presupuestos actualizado
 */
router.put('/presupuestos/:id', verifyToken, UpdatePresupuestos);

/**
 * @swagger
 * /api/presupuestos/{id}:
 *   delete:
 *     summary: Borrar presupuestos
 *     tags: [presupuestos]
 *     responses:
 *       200:
 *         description: Presupuestos eliminado
 */
router.delete('/presupuestos/:id', verifyToken, borrarPresupuestos);

export default router;


