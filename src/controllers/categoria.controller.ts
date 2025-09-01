import { Request, Response, NextFunction} from "express";
import { PrismaClient } from '@prisma/client';      

//CRUD
const prisma = new PrismaClient();
export const getCategorias = async (req: Request, res: Response, next: NextFunction) => {   

    try {
        const categorias = await prisma.categorias.findMany();
        res.json(categorias);
    } catch (error) {
        next(error);
    }
}   

//Insertar categoria
export const createCategoria = async (req: Request, res: Response, next: NextFunction) => {
    
        const { descripcion, color_hex, usuarioId } = req.body;
        try{
        const nuevaCategoria = await prisma.categorias.create({
            data: { descripcion, color_hex, usuarioId }
        });
        res.json(nuevaCategoria);
    } catch (error) {
        next(error);
    }
};

//Update categoria
export const UpdateCategoria = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { descripcion, color_hex, usuarioId } = req.body;
    try {
        const categoriaActualizada = await prisma.categorias.update({
            where: { id: Number(id) },
            data: { descripcion, color_hex, usuarioId }
        });
        res.json(categoriaActualizada);
    } catch (error) {
        next(error);
    }
};

//Borrar categoria
export const borrarCategoria = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        await prisma.categorias.delete({
            where: { id: Number(id) }
        });
        res.json({ message: "Categoría eliminada" });
    } catch (error) {
        next(error);
    }
};

//filtrado categorias
export const filtrarCategoria = async (req: Request, res: Response, next: NextFunction) => {
    const { descripcion } = req.params;
 
        const categoriasFiltradas = await prisma.categorias.findMany({
            where: {
                descripcion: {
                    contains: descripcion
                }
            }
        });
        res.json(categoriasFiltradas);
    
}

//ordenar categorias
export const ordenarCategoria = async (req: Request, res: Response, next: NextFunction) => {
    const listacategoriaOrden=await prisma.categorias.findMany({
        orderBy: {
            descripcion: 'asc'
        }
    });
    res.json(listacategoriaOrden);  


}

//paginar categorias
export const paginarCategoria = async (req: Request, res: Response, next: NextFunction) => {
    const { page, pageSize } = req.params;
    const pageNumber = parseInt(page);
    const size = parseInt(pageSize);
    const categorias = await prisma.categorias.findMany({
        skip: (pageNumber - 1) * size,
        take: size
    });
    res.json(categorias);   
}