-- CreateTable
CREATE TABLE "public"."Usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Categorias" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "color_hex" TEXT NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "public"."Usuarios"("email");

-- AddForeignKey
ALTER TABLE "public"."Categorias" ADD CONSTRAINT "Categorias_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
