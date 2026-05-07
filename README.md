# README — AVISTAR Frontend

## AVISTAR Frontend

Frontend de la plataforma AVISTAR desarrollado únicamente con HTML, CSS y JavaScript vanilla.

El frontend consume una API REST creada con FastAPI utilizando `fetch()`.

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- Docker
- Nginx

---

# Funcionalidades

- Mostrar hospedajes
- Crear hospedajes
- Editar hospedajes
- Eliminar hospedajes
- Buscar hospedajes
- Ordenar hospedajes
- Visualizar ratings
- Crear ratings
- Exportar hospedajes a CSV
- Interfaz responsive

---

# Estructura del proyecto

```txt
frontend-avistar/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── api.js
│   └── main.js
├── Dockerfile
└── README.md
```

---

# Frontend en producción (GitHub Pages)

## URL del frontend

```txt
https://adairvlz.github.io/frontend-avistar/
```

## Cómo desplegar en GitHub Pages

1. Subir el frontend a GitHub.
2. Ir a:

```txt
Settings → Pages
```

3. Configurar:

```txt
Source: Deploy from a branch
Branch: main
Folder: /root
```

4. Guardar cambios.
5. GitHub generará automáticamente una URL pública.

---

# Cómo correr el proyecto localmente

## Requisitos

- Docker Desktop
- Git

## 1. Clonar repositorio

```bash
git clone <https://github.com/Adairvlz/frontend-avistar>
cd frontend-avistar
```

## 2. Construir imagen Docker

```bash
docker build -t frontend-avistar .
```

## 3. Ejecutar contenedor

```bash
docker run -p 8088:80 frontend-avistar
```

---

# URL local

```txt
http://localhost:8088
```

---

# Backend API

Este frontend consume el backend disponible en:

```txt
http://localhost:8010
```

Repositorio backend:

```txt
https://github.com/Adairvlz/backend-avistar
```

---

# Docker

El frontend utiliza Nginx dentro de Docker para servir archivos estáticos.

---

# Exportación CSV

La exportación CSV fue implementada manualmente usando JavaScript vanilla y `Blob()` sin utilizar librerías externas.

---

# Challenges implementados

- Cliente usando fetch()
- Exportación CSV
- Sistema de ratings
- Diseño responsive
- Interfaz moderna
- CRUD completo

---

# Screenshots

## Frontend funcionando

Agregar screenshot aquí.

## CRUD funcionando

Agregar screenshot aquí.

## Ratings funcionando

Agregar screenshot aquí.

---

# Reflexión personal

Escribir reflexión personal aquí.