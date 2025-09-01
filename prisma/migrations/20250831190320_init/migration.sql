/*
  Warnings:

  - You are about to alter the column `direccion` on the `Usuarios` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "public"."Usuarios" ALTER COLUMN "direccion" SET DATA TYPE VARCHAR(100);
