# Catálogo de Productos con Historial de Cambios

Este proyecto es un catálogo de productos con la capacidad de mantener un historial de cambios en el precio y el stock para cada producto. La aplicación está construida utilizando Angular en el frontend, Node.js con Express en el backend y MongoDB como base de datos.

## Funcionalidades

- **Listado de Productos:** Visualiza una lista paginada de productos con información básica, como nombre, precio, stock y fecha de la última actualización.

- **Filtrado de Productos:** Utiliza la barra de búsqueda para filtrar productos por nombre o SKU. También puedes aplicar filtros adicionales según tus necesidades.

- **Creación de Productos:** Agrega nuevos productos al catálogo proporcionando detalles como nombre, descripción, SKU, imagen, etiquetas, precio y stock.

- **Edición de Productos:** Actualiza la información de productos existentes, incluidos cambios en el precio y el stock. Cada actualización se registra en el historial de cambios.

- **Previsualización de Productos:** Consulta información detallada de un producto seleccionado, incluido su historial de cambios en el precio y el stock.

- **Historial de Cambios:** Cada cambio en el precio o el stock de un producto se registra automáticamente en su historial. Esto permite rastrear la evolución de estos valores con el tiempo.

## Requisitos Previos

Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas en tu sistema:

- Node.js y npm: Puedes descargarlos e instalarlos desde [nodejs.org](https://nodejs.org/).

- MongoDB: Instala y configura MongoDB siguiendo las instrucciones en [mongodb.com](https://www.mongodb.com/try/download/community).

## Configuración

### Configuración del Backend

1. Navega al directorio del backend:

   ```bash
   cd backend
