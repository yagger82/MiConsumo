import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET!;
const prisma = new PrismaClient();

export const login = async (req: Request, res: Response, next:
NextFunction) => {
const { usuario, password } = req.body;
    console.log("Usuario recibido:", usuario);
    console.log("Password recibido:", password);
try {
// 1. Buscar usuario
let user = await prisma.usuarios.findUnique({ where: { email: usuario } }); 
if (!user) {
  user = await prisma.usuarios.findFirst({ where: { nro_doc: usuario } });
}

  console.log("user encontrado:", user?.email);
  console.log("user encontrado:", user?.password_hash); 

if (!user || !user.password_hash) {
return res.status(401).json({ error: "usuario o contraseña inválidas" });
}

// equivalente a:
// if (user ===null|| user.password===undefined) {
// return res.status(401).json({ error: "Credenciales inválidas" });
// }

// 2. Verificar password

const isValidPassword = await bcrypt.compare(password, user.password_hash);

if (!isValidPassword) {
return res.status(401).json({ error: "Password inválida" });
}
// 3. Crear token
const token = jwt.sign(
    { userId: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" }
);

 res.json({ message: "Login exitoso", token, userId: user.id });
} catch (err) {
res.status(500).json({ error: "Error en el login" });
}
};