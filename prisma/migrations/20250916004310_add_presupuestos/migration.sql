-- CreateTable
CREATE TABLE "public"."Presupuestos" (
    "id" SERIAL NOT NULL,
    "usuarioPresId" INTEGER NOT NULL,
    "categoriaPresId" INTEGER NOT NULL,
    "anio_mes" VARCHAR(7) NOT NULL,
    "monto_max" DECIMAL(14,2) NOT NULL,

    CONSTRAINT "Presupuestos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Presupuestos" ADD CONSTRAINT "Presupuestos_usuarioPresId_fkey" FOREIGN KEY ("usuarioPresId") REFERENCES "public"."Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Presupuestos" ADD CONSTRAINT "Presupuestos_categoriaPresId_fkey" FOREIGN KEY ("categoriaPresId") REFERENCES "public"."Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
