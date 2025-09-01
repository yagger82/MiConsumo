/*
  Warnings:

  - You are about to alter the column `nombre` on the `Usuarios` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - Added the required column `apellido` to the `Usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nro_doc` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Usuarios" ADD COLUMN     "apellido" VARCHAR(50) NOT NULL,
ADD COLUMN     "nro_doc" VARCHAR(20) NOT NULL,
ALTER COLUMN "nombre" SET DATA TYPE VARCHAR(50);
