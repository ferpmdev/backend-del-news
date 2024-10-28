## README.md - Backend de Noticias Periodísticas con Node.js, Express y JWT

### Descripción

Este proyecto implementa un backend Node.js con Express para gestionar un CRUD (Create, Read, Update, Delete) de noticias periodísticas. Incluye una capa de autenticación utilizando JSON Web Tokens (JWT) para proteger los recursos.

### Tecnologías Utilizadas

- **Node.js:** Entorno de ejecución de JavaScript para el lado del servidor.
- **Express.js:** Framework web minimalista para Node.js.
- **MongoDB:** Base de datos NoSQL para almacenar las noticias.
- **JSON Web Tokens (JWT):** Mecanismo para autenticación y autorización.
- **Bcrypt:** Para el hash de contraseñas.

### Funcionalidades

- **Inicio de sesión:** Autentica a los usuarios registrados y genera un JWT.
- **CRUD de noticias:** Permite crear, leer, actualizar y eliminar noticias.
- **Protección de rutas:** Solo usuarios autenticados pueden acceder a ciertas rutas.
- **Validación de datos:** Valida los datos de entrada para prevenir errores.

### Instalación y Ejecución

1. **Clonar el repositorio:** `git clone https://github.com/ferpmdev/backend-del-news.git`
2. Ejecuta `cd newsFront`
3. Ejecuta `cd backend-del-news`
4. Verifica que te encuentras sobre la rama master.
5. **Configurar la base de datos:** Crear una base de datos MongoDB y configurar las credenciales en `config/config.json`.
6. Crea en la raíz del proyecto un archivo llamado `.env` con las siguientes claves: 
- `PORT=4000`
- `DB_CONNECT=`
- `SECRET_QUESTION_JWT=`
Deberas completar con los valores obtenidos del paso anterior las claves `DB_CONNECT` y `SECRET_QUESTION_JWT=` de acuerdo a los datos de la base de datos que creaste.
7. **Instalar dependencias:** `npm install`
8. **Iniciar el servidor:** `npm run dev`

### Endpoints

- **Inicio de sesión:** POST /api/auth/login
- **Obtener todas las noticias:** GET localhost:4000/api/articles
- **Crear una noticia:** POST localhost:4000/api/articles (requiere autenticación)
- **Actualizar una noticia:** PUT localhost:4000/api/articles/id (requiere autenticación)
- **Eliminar una noticia:** DELETE localhost:4000/api/articles/id (requiere autenticación)