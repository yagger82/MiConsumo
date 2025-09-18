# MiConsumo

**MiConsumo** es un sistema web para la gestión de consumos personales, con autenticación JWT, frontend en HTML+Bootstrap y backend en ExpressJS + Prisma + PostgreSQL.

---

## Características principales

- **Login seguro** con JWT.
- **Frontend atractivo** y responsive usando Bootstrap 5 y Bootstrap Icons.
- **Backend ExpressJS** con rutas protegidas.
- **ORM Prisma** para acceso a base de datos PostgreSQL.
- **Swagger** para documentación de la API.
- **Validaciones** de usuario y contraseña en frontend y backend.
- **Soporte CORS** para desarrollo local.

---

## Estructura del proyecto

```
miConsumo/
│
├── frontend/
│   ├── index.html
│   └── styles.css
│
├── src/
│   ├── controllers/
│   │   ├── auth.controllers.ts
│   │   └── user.controller.ts
│   ├── routes/
│   │   ├── categoria.routes.ts
│   │   └── ...
│   ├── index.ts
│   └── swagger.ts
│
├── prisma/
│   └── schema.prisma
│
├── package.json
└── README.md
```

---

## Instalación y configuración

1. **Clona el repositorio y entra a la carpeta del proyecto**

2. **Instala las dependencias**

```sh
npm install
```

3. **Configura la base de datos**

- Edita `.env` y coloca tu cadena de conexión PostgreSQL en `DATABASE_URL`.

4. **Configura la clave JWT**

- En `.env` agrega:  
  ```
  JWT_SECRET=tu_clave_secreta
  ```

5. **Realiza las migraciones de Prisma**

```sh
npx prisma migrate dev --name init
```

6. **Genera el cliente Prisma**

```sh
npx prisma generate
```

7. **Inicia el servidor de desarrollo**

```sh
npm run dev
```

---

## Uso del frontend

- Abre `frontend/index.html` en tu navegador.
- Ingresa usuario y contraseña.
- El sistema validará los campos y mostrará mensajes claros y centrados.
- El diseño es moderno, con logo rústico y campos alineados.

---

## Documentación de la API

- Accede a la documentación Swagger en:  
  [http://localhost:3000/docs](http://localhost:3000/docs)

---

## Notas de desarrollo

- El backend ExpressJS tiene habilitado CORS para desarrollo local.
- El login acepta usuario por email o número de documento.
- El token JWT se guarda en localStorage tras el login.
- El frontend utiliza Bootstrap 5 y Bootstrap Icons vía CDN.
- Los estilos personalizados están en `frontend/styles.css`.

---

## Créditos

- Bootstrap: https://getbootstrap.com/
- Bootstrap Icons: https://icons.getbootstrap.com/
- Prisma ORM: https://www.prisma.io/
- ExpressJS: https://expressjs.com/
- Google Fonts (Permanent Marker): https://fonts.google.com/specimen/Permanent+Marker

---

¡Gracias