import { Request, Response, NextFunction} from "express";
import { PrismaClient } from '@prisma/client';      

//CRUD
const prisma = new PrismaClient();

//get movimientos
export const getMovimientos = async (req: Request, res: Response, next: NextFunction) => {   

    try {
        const movimientos = await prisma.movimientos.findMany();
        res.json(movimientos);
    } catch (error) {
        next(error);
    }
}   

//Insertar  movimientos
export const createMovimientos = async (req: Request, res: Response, next: NextFunction) => {

    // Use the correct property names as defined in your Prisma schema
    const { usuarioMovId, categoriaMovId, fechamov, monto,tipomov,nota } = req.body;
    try {
        const nuevaMovimientos = await prisma.movimientos.create({
            data: { usuarioMovId, categoriaMovId, fechamov, monto,tipomov,nota }
        });
        res.json(nuevaMovimientos);
    } catch (error) {
        next(error);
    }
};

//Update movimientos
export const UpdateMovimientos = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { usuarioMovId, categoriaMovId, fechamov, monto,tipomov,nota } = req.body;
    try {
        const movimientosActualizados = await prisma.movimientos.update({
            where: { id: Number(id) },
            data: { usuarioMovId, categoriaMovId, fechamov, monto,tipomov,nota }
        });
        res.json(movimientosActualizados);
    } catch (error) {
        next(error);
    }
};

//Borrar movimientos
export const borrarMovimientos = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        await prisma.movimientos.delete({
            where: { id: Number(id) }
        });
        res.json({ message: "Movimiento eliminado" });
    } catch (error) {
        next(error);
    }
};

