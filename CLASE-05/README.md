# CLASE REPASO 4 - CONTENEDORES, DOCKER Y KUBERNETES
1. ¿Qué es un contenedor?
Es una unidad (una caja) que almacena todo el software , tipo, código, ejecución, etc. 
Almacena desde el sistema operativo base donde corre nuestro proyecto, tiene sus propios recursos cuales software necesita como así también librerías, dependencias, etc.
2. ¿Qué es Docker?
Es una plataforma que permite crear, desplegar y gestionar contenedores.
Lo mejor es que ya hay modelos contenedores, y con un simple comando podemos descargarlo y usarlo.
Ejemplo:
- Postgres sql
```bash
docker pull postgres
```
Otra forma es crear nuestro propio contenedor, para eso usamos un archivo llamado Dockerfile.
Ejemplo de Dockerfile para una app en Nodejs:
```Dockerfile
# Usamos una imagen base de Node.js
FROM node:14
# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app
# Copiamos los archivos del proyecto al contenedor
COPY . .
# Instalamos las dependencias
RUN npm install
# Exponemos el puerto en el que la aplicación correrá
EXPOSE 3000
```

Para orquestrar y gestionar contenedores a gran escala, se utiliza Kubernetes.
3. ¿Qué es Kubernetes?
Es una plataforma de orquestación de contenedores que automatiza la implementación, el escalado y la gestión de aplicaciones en contenedores.

Y otra tech para orquestar contenedores es Docker Compose, que permite definir y gestionar aplicaciones multi-contenedor de Docker.
Ejemplo para iniciar un contenedor de Postgres:
```yaml
version: '3.8'
services:
  db:
    image: postgres
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydatabase
    ports:
      - "5432:5432"
```
Correr comando:
```bash
docker-compose up -d
```


# CLASE 5

## Repaso de CLASE ANTERIOR

- Contenedores
- Docker (dockerfile)
  - Instalamos
    - Docker
    - Docker desktop
- Docker Hub
- Kubernetes (Minikube) - **Kubernetes NO VA en el proyecto final**

**IMPORTANTE:** Docker y Docker Hub si lo van a usar en el proyecto final

### Ejemplo de los pasos a seguir:

1. Instalar Docker y Docker desktop
2. Crear cuanta en Docker Hub y loguearse
3. Crear un dockerfile del proyecto
4. Crear la imagen
5. Subir la imagen a Docker Hub (recordar que esta debe ser pública)
6. Compartir el link de la imagen en el README del proyecto final

## PARTE 1 - SEGURIDAD

- PPT (20 min)
- .md (20 min)
- Aplicar y revisar en los Proyectos de ejemplo (15 min)

* Descanso de 10 min - Volvemos a las 12:40!!!

## PARTE 2 - DOCUMENTACIÓN

- PPT (20 min)
- Code Proyecto (35 min)
