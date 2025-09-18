import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import  bcrypt  from "bcryptjs"; 

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
const users = await prisma.usuarios.findMany(); //sinonimo de select * from user
res.json(users);
};


export const getUser = async (req: Request, res: Response) => {
const { id } = req.params;
const user = await prisma.usuarios.findUnique({ where: { id: Number(id) } });
res.json(user);
};

//insertar o crear el usuario
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
try {
const { nombre, apellido, nro_doc, email, direccion,password_hash } = req.body;
const hashPassword = await bcrypt.hash(password_hash, 10); //encriptar password
const user = await prisma.usuarios.create({ data: { nombre, apellido, nro_doc, email, direccion, password_hash: hashPassword} }); //sinonimo de insert into
res.json(user);
} catch (error) {
next(error);
}
};

//exportar o actualizar el usuario
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
try {
const { id } = req.params;
const { nombre, apellido, nro_doc, email, direccion, password_hash } = req.body;
const hashPassword = await bcrypt.hash(password_hash, 10); //encriptar password
const user = await prisma.usuarios.update({  //sinonimo de update
where: { id: Number(id) },
data: { nombre, apellido, nro_doc, email, direccion, password_hash: hashPassword },
});
res.json(user);
} catch (error) {
next(error);
}
};

//eliminar un usuario
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
try {
const { id } = req.params;
await prisma.usuarios.delete({ 
    where: { id: Number(id) } 
});//delete
    res.json({ message: 'Usuario eliminado correctamente' });
} catch (error) {
    next(error);
}
};

// GET /api/user/filter/:nombre

export const filterUserNombre = async (req: Request, res: Response, next: NextFunction) => {

    const {nombre} = req.params;

    const listadoUser = await prisma.usuarios.findMany({
        where: {
            nombre : {
                contains : nombre
            }
        }
    })
res.json(listadoUser);

}


export const filterUserApellido = async (req: Request, res: Response, next: NextFunction) => {

    const {apellido} = req.params;

    const listadoUser = await prisma.usuarios.findMany({
        where: {
            apellido : {
                contains : apellido
            }
        }
    })
res.json(listadoUser);

}


export const filterUserDocumento = async (req: Request, res: Response) => {

    const {documento} = req.params;

    const listadoUser = await prisma.usuarios.findMany({
        where: {
            nro_doc : {
                contains : documento
            }
        }
    })
res.json(listadoUser);

}

//ordenar usuarios
export const orderUser = async (req: Request, res: Response) => {
    const listadousersOrdernado=await prisma.usuarios.findMany({
        orderBy:{ nombre:'desc'}  })
    res.json(listadousersOrdernado);
}

//paginacion de usuarios    
export const paginacionUser = async (req: Request, res: Response) => {
    const skip=Number(req.query.skip) || 0;
    const take=Number(req.query.take) || 3;
    const listapaginada = await prisma.usuarios.findMany({
        skip,
        take
    })  
    res.json(listapaginada);
}