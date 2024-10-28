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
2. Ejecuta `cd backend-del-news`
3. Verifica que te encuentras sobre la rama master.
4. **Crear la base de datos:** Crear una base de datos MongoDB.
5. **Configurar las variables de entorno:** Crea en la raíz del proyecto un archivo llamado `.env` con lo siguiente: 
- `PORT=4000`
- `DB_CONNECT=`
- `SECRET_QUESTION_JWT=`
Completar con los valores obtenidos del paso anterior las claves `DB_CONNECT` y `SECRET_QUESTION_JWT=` de acuerdo a los datos de la base de datos que creaste.
6. **Instalar dependencias:** Comprueba que en tu equipo tengas ya instalado node(v18.12.1 o superior), nodemon(3.1.4 o superior) y npm(8.19.2 o superior), de lo contrario deberas instalarlo. Luego, instala las dependencias ejecutando: `npm i`
7. **Iniciar el servidor:** Verifica que estes registrado en un equipo como administrador y ejecuta `npm run dev`.

### Endpoints

- **Inicio de sesión:** POST /api/auth/login
- **Obtener todas las noticias:** GET localhost:4000/api/articles
- **Crear una noticia:** POST localhost:4000/api/articles (requiere autenticación)
- **Actualizar una noticia:** PUT localhost:4000/api/articles/id (requiere autenticación)
- **Eliminar una noticia:** DELETE localhost:4000/api/articles/id (requiere autenticación)