import { Request, Response, NextFunction } from "express";  
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();    
const SECRET_KEY = process.env.JWT_SECRET!;

declare module "express-serve-static-core"{
    interface    Request{
        user?: string | jwt.JwtPayload;
    }
}


export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    //const authHeader = req.headers.authorization;
    const authHeader = req.headers["authorization"];  // otra forma de hacerlo 
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(403).json({ message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }   

}