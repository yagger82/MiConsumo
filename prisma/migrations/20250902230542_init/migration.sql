-- CreateEnum
CREATE TYPE "public"."TipoMov" AS ENUM ('E', 'I');

-- CreateTable
CREATE TABLE "public"."Movimientos" (
    "id" SERIAL NOT NULL,
    "usuarioMovId" INTEGER NOT NULL,
    "categoriaMovId" INTEGER NOT NULL,
    "fechamov" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "monto" DECIMAL(14,2) NOT NULL,
    "tipo_mov" "public"."TipoMov" NOT NULL DEFAULT 'E',
    "nota" VARCHAR(255) NOT NULL,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Movimientos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Movimientos" ADD CONSTRAINT "Movimientos_usuarioMovId_fkey" FOREIGN KEY ("usuarioMovId") REFERENCES "public"."Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Movimientos" ADD CONSTRAINT "Movimientos_categoriaMovId_fkey" FOREIGN KEY ("categoriaMovId") REFERENCES "public"."Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
