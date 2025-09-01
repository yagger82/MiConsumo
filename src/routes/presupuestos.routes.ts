import { Router } from 'express';
import { getUsers, deleteUser,updateUser,createUser, filterUserNombre,filterUserApellido,filterUserDocumento } from '../controllers/user.controller';
const router = Router();



router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

//consulta avanzadas
router.get('/user/filter/nombre/:nombre', filterUserNombre);
router.get('/user/filter/apellido/:apellido', filterUserApellido);
router.get('/user/filter/documento/:documento', filterUserDocumento);

router.get('/users', getUsers);

export default router;