import { Request, Response, NextFunction} from "express";
import { PrismaClient } from '@prisma/client';     
import  bcrypt  from "bcryptjs"; 

//CRUD
const prisma = new PrismaClient();

//get presupuestos
export const getPresupuestos = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const presupuestos = await prisma.presupuestos.findMany();
        res.json(presupuestos);
    } catch (error) {
        next(error);
    }
}   

//Insertar  presupuestos
export const createPresupuestos = async (req: Request, res: Response, next: NextFunction) => {

    // Use the correct property names as defined in your Prisma schema
     const { usuarioPresId, categoriaPresId, anio_mes, monto_max } = req.body;
    try {
        const nuevaPresupuesto = await prisma.presupuestos.create({
            data: { usuarioPresId, categoriaPresId, anio_mes, monto_max }
        });
        res.json(nuevaPresupuesto);
    } catch (error) {
        next(error);
    }
};

//Update presupuestos
export const UpdatePresupuestos = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { usuarioPresId, categoriaPresId, anio_mes, monto_max } = req.body;
    try {
        const presupuestosActualizados = await prisma.presupuestos.update({
            where: { id: Number(id) },
            data: { usuarioPresId, categoriaPresId, anio_mes, monto_max }
        });
        res.json(presupuestosActualizados);
    } catch (error) {
        next(error);
    }
};

//Borrar presupuestos
export const borrarPresupuestos = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        await prisma.presupuestos.delete({
            where: { id: Number(id) }
        });
        res.json({ message: "Presupuesto eliminado" });
    } catch (error) {
        next(error);
    }
};

