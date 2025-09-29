# NicaXplora

##### Descripción del proyecto:
<p>NicaXplora es una aplicación web desarrollada para HACKATHON Nicaragua 2025, este sitio esta siendo diseñado para ayudar a usuarios tanto nacionales como extranjeros a explorar destinos turisticos en Nicaragua de forma sencilla, interactiva y rápida. Este proyecto tiene como objetivo mejorar la experiencia de los usuarios a descubrir lugares; brindando información de transporte, y recomendando sitios de gran valor nacional en los cuales se pueden vivir experiencias naturalez incomparables.</p>

------------

#### Algunos requisitos que necesitas antes de instalar y ejecutar la aplicacion son:
##### Requerimientos técnicos (Frontend):

- Node.js >= 22.18.0 (para ejecutar y compilar la app React)
- npm >= 10.9.3
- React >= 18.2.0

Librerías principales:
- axios
- react-icons
- react-router-dom
- tailwindcss
- react-hot-toast
- lucide-react

##### Requerimientos tecnicos (Backend):
- Node.js >= 22.18.0
- npm >= 10.9.3
- Express >= 5.1.0
- MySQL

Librerías principales:
- bcrypt
- body-parser
- cors
- dotenv
- express-handlebars
- express-myconnection
- express-session
- jsonwebtoken
- mysql

##### Dev Tools
- nodemon (para reinicio automático durante desarrollo)

------------

#### Instalación:
###### Sigue estos pasos para instalar y ejecutar el proyecto en tu maquina local:
```
1. Requisitos previos

- Node.js y npm instalados: https://nodejs.org/en/download

- MySQL instalado y en funcionamiento

```
```
Clona el repositorio: 
-> git clone https://github.com/Jesus-Guadalupe/NicaXplora.git
```

```
Abre el proyecto desde visual studio code y desde la terminal navega hasta la carpeta del proyecto 
-> cd TuRutaDeClonacion/NicaXplora
```

```
Una vez con el proyecto abierto debes instalar las dependencias necesarias, navega hasta la carpeta backend
-> cd nicaxplora/backend
```

```
Instala las dependencias backend necesarias(asegurate estar en la carpeta backend): 
-> npm install
```

```
Luego instala las dependencias frontend necesarias(Sal del backend y navega hasta la carpeta frontend) y ejecuta: 
-> npm install
```

```
Crear la estructura de base de datos:
-> En la estructura del proyecto, abre el archivo db-estructure.sql y copia el código
-> En MySQL crea una nueva base de datos y en un nuevo scrypt pega y ejecuta ese código
```

```
Luego regresa a visual studio code y configura las variables de entorno:
-> Crea un archivo ".env" en la carpeta backend

-> Ingresa  credenciales: 
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=dbnicaxplora

-> Debes reemplazar los datos por los que tu definiste en el proceso de creación de la base de datos en MySQL.

```

```
Ejecuta la aplicación: 
-> Abre una primera terminal y navega hasta la carpeta backend:
cd nicaxplora/backend

-> Ejecuta npm start
```

```
-> Luego abre una segunda terminal y navega hasta la carpeta frontend(Dejando la primera terminal en funcionamiento):
cd nicaxplora/frontend

-> Ejecuta npm run dev
```

###### Y con eso estas listo, tienes todo lo necesario para empezar!

------------

#### ¿No sabes como usarlo? tranquilo.
##### Usabilidad

- Abre tu navegador y visita http://localhost:3100/

- **Explora las funcionalidades:** Ver destinos, Ver Rutas de transporte, entre otras...

- Para contribuir, crea un branch local con tu feature y envía un pull request al repositorio principal de github.

------------
#### Contribucion
- Asegúrate de seguir las buenas prácticas de commits y mantener tu branch actualizado en conjunto con main.

- Reporta cualquier bug o problema mediante la sección de Issues del repositorio.

------------
#### Futuras mejoras

- Mejorar diseño responsivo
- Añadir nuevas ciudades y destinos
- Potenciar el chat por IA
- Añadir distintos idiomas
- Modo oscuro

-------------
#### Licencia 
<p>Este proyecto está bajo la licencia MIT.
