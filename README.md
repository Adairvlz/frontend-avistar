# Avistar - Frontend

Este repositorio (o carpeta) contiene la interfaz de usuario del proyecto **Avistar**, desarrollada con **HTML, CSS y JavaScript clásico (Vanilla)**.

El frontend consume una API construida en FastAPI (Python) que se encuentra en la carpeta del backend.

## 🚀 Requisitos Previos

- Un navegador web moderno.
- [Docker](https://www.docker.com/products/docker-desktop) (Opcional, si deseas servir el frontend mediante un contenedor Nginx o levantar el backend localmente).

## 🛠️ Cómo Correr el Proyecto Completo

Para que el frontend pueda obtener y enviar datos correctamente, el backend y su base de datos deben estar en ejecución primero.

### 1. Levantar el Backend y la Base de Datos

Abre una terminal, dirígete a la carpeta del backend y levanta los servicios usando Docker Compose:

```bash
cd ../backend-avistar
docker compose up -d
```

Esto iniciará la base de datos PostgreSQL y la API de FastAPI. La API quedará disponible en el puerto `8010` (`http://localhost:8010`).

### 2. Levantar el Frontend

Una vez que el backend esté funcionando, regresa a la carpeta del frontend:

```bash
cd ../frontend-avistar
```

Tienes dos formas de ejecutar y visualizar esta interfaz:

#### Opción A: Abrir el archivo directamente (Sin Docker)
La forma más rápida es simplemente buscar el archivo `index.html` en tu explorador de archivos y darle doble clic para abrirlo en tu navegador.

*(Nota: Algunas peticiones CORS o módulos de JavaScript podrían requerir que los archivos se sirvan desde un servidor web. Si esto falla, usa la Opción B o herramientas como `Live Server` en VS Code).*

#### Opción B: Usando Docker (Servidor Nginx)
Este repositorio incluye un `Dockerfile` configurado para servir los archivos estáticos usando **Nginx**. Para levantarlo con Docker, ejecuta:

1. Construye la imagen de Docker:
   ```bash
   docker build -t avistar-frontend .
   ```
2. Corre el contenedor mapeándolo a un puerto de tu computadora (por ejemplo, el 8080):
   ```bash
   docker run -d -p 8080:80 avistar-frontend
   ```
3. Abre tu navegador y visita:
   - **🔗 [http://localhost:8080](http://localhost:8080)**

---

## 📁 Estructura del Proyecto

- `index.html`: Punto de entrada principal de la aplicación.
- `css/`: Contiene todas las hojas de estilo de la aplicación.
- `js/`: Contiene la lógica del lado del cliente para interactuar con la API.
- `Dockerfile`: Configuración para empaquetar y servir la aplicación utilizando Nginx en Alpine Linux.