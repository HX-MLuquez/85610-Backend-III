# API REST con buenas prácticas

## Descripción

En esta práctica integradora, se desarrollará una API REST utilizando Node.js y Express, siguiendo buenas prácticas de desarrollo. La API permitirá gestionar recursos de manera eficiente y segura, implementando autenticación, validación de datos y manejo adecuado de errores.

## Requisitos

- Node.js y npm instalados en el sistema.
- Conocimientos básicos de JavaScript, Node.js y Express.
- Buena estructura de carpetas, modularización del código y separación de responsabilidades.
- Implementar Validaciones siempre que sea necesario.
- Postman o cualquier herramienta para probar la API.
- Documentación clara y detallada con swagger.
- Implementar nuestro propio servicio de loggeo utilizando winston.
- Tests unitarios y de integración utilizando Mocha + Chai + Supertest.
- Mockear usando faker.js.
- Implementar seguridad analizando OWASP Top 10.
  - Cors
  - Helmet
  - Rate Limiting
- Contenerización con Docker. Implementar un Dockerfile para la aplicación y un docker-compose.yml para orquestar los servicios necesarios (por ejemplo, una base de datos).
- DockerHub: Subir la imagen de la aplicación a DockerHub para facilitar su despliegue en cualquier entorno. Y compartir el enlace del repositorio de DockerHub en la documentación del proyecto.

### Docker - comandos

- Construir la imagen:

```bash
docker build -t tu_usuario/tu_repositorio:tag .
```

- Ejecutar el contenedor:

```bash
docker run -d -p 3000:3000 tu_usuario/tu_repositorio:tag
```

### DockerHub

```
https://hub.docker.com/repository/docker/tu_usuario/tu_repositorio
```
