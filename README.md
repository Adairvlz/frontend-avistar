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

<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/06ba203c-3988-4cad-b940-ece2d07eb945" />

<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/dacbd0c5-8001-42d3-a4e3-88acb260fe25" />

---

# Reflexión personal

Usar HTML puro y java vanilla fue un poco complicado porque habia que estar tirando y recompiniendo el contenedor para ver los cambios y algo que no  me gusto es que en la mitad del codigo de java tenia que devolver html lo cual lo hace un poco confuso mezclar los dos.

Creo que no lo volveria a usar a menos que sea necesario pero por eso existen tecnologias como REACT que ayudan mucho a la hora de la reutilizacion de componentes y que los compomentes  sean  reactivos para poder ver los cambios de manera local del proyecto
