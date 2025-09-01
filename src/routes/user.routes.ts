
import { Router } from 'express';
import { getUsers, getUser, deleteUser,updateUser,createUser, filterUserNombre,filterUserApellido,filterUserDocumento,paginacionUser,orderUser } from '../controllers/user.controller';
const router = Router();


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operaciones sobre usuarios
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lista usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/users', getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: OK }
 *       404: { description: No encontrado }
 */
router.get("/api/users/:id", (req, res) => {
  // ...
  res.json({ id: Number(req.params.id), name: "Ana" });
});

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operaciones sobre usuarios
 */

/**
 * @swagger
 * /api/user/:id  :
 *   get:
 *     summary: Obtener usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/user/:id', getUser);


/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Crear usuario
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: Usuario creado
 */
router.post('/user', createUser);

/**
 * @swagger
 * /api/user/:id:
 *   post:
 *     summary: Actualizar usuario
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Usuario actualizado
 */
router.put('/user/:id', updateUser);


/**
 * @swagger
 * /api/user/:id:
 *   post:
 *     summary: Borrar usuario
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Usuario borrado
 */
router.delete('/user/:id', deleteUser);

//consulta avanzadas

/**
 * @swagger
 * /api/user/filter/nombre/{nombre}:
 *   get:
 *     summary: Filtrar usuario por nombre
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/user/filter/nombre/:nombre', filterUserNombre);

/**
 * @swagger
 * /api/user/filter/apellido/{apellido}:
 *   get:
 *     summary: Filtrar usuario por apellido
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: apellido
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/user/filter/apellido/:apellido', filterUserApellido);
/**
 * @swagger
 * /api/user/filter/documento/{documento}:
 *   get:
 *     summary: Filtrar usuario por apellido
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: documento
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/user/filter/documento/:documento', filterUserDocumento);
router.get('/user/paginate', paginacionUser);
router.get('/user/order', orderUser);



export default router;