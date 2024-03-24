**MusicPlayer**

**MusicPlayer** es una aplicación de gestión de listas de reproducción de música que permite a los usuarios crear, ver y eliminar listas de reproducción, así como agregar.

**Características**
- **Gestión de Listas de Reproducción:** Los usuarios pueden crear, ver y eliminar listas de reproducción.
- **Gestión de Canciones:** Los usuarios pueden agregar canciones de las listas de reproducción.
- **Filtrado de Listas de Reproducción:** Los usuarios pueden filtrar las listas de reproducción por nombre.
- **Interfaz de Usuario Intuitiva:** La aplicación cuenta con una interfaz de usuario intuitiva y fácil de usar.

**Tecnologías Utilizadas**
- **Frontend:** Angular v 13.3.5
- **Backend:** Spring Boot Java v 17.0.6
- **Base de Datos:** PostgreSQL

**Instalación y Configuración**

**Backend**
1. Clona este repositorio.
2. Abre el proyecto backend en tu IDE favorito.
3. Configura la base de datos PostgreSQL en `application.properties`.

**Querys para la creacion de las tablas:**

```sql
CREATE TABLE IF NOT EXISTS cancion (
    idCancion SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    artista VARCHAR(255) NOT NULL,
    album VARCHAR(255) NOT NULL,
    anno INT NOT NULL,
    genero VARCHAR(255) NOT NULL,
    idListaReproduccion INT,
    FOREIGN KEY (idListaReproduccion) REFERENCES lista_reproduccion (idListaReproduccion)
);

CREATE TABLE IF NOT EXISTS lista_reproduccion (
    idListaReproduccion SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL
);
```

4. Ejecuta la aplicación Spring Boot.

**Frontend**
1. Clona este repositorio.
2. Abre la terminal y navega hasta el directorio del proyecto frontend.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar el servidor de desarrollo de Angular.

**Uso**
- Accede a la interfaz de usuario de la aplicación en tu navegador.
  - **Clave:** 123456
  - **Usuario:** 2180428
- Visualice las listas de reproducción existentes.
- Filtra las listas de reproducción por nombre.
- Elimina las listas de reproducción existentes si es necesario.
