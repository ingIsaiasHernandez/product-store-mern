# 🛍️ Product Store MERN

Una aplicación web completa de tienda de productos desarrollada con el stack MERN (MongoDB, Express.js, React.js, Node.js). Esta aplicación permite gestionar un catálogo de productos con operaciones CRUD completas (Crear, Leer, Actualizar y Eliminar).

## 📋 Descripción del Proyecto

Product Store MERN es una aplicación backend que proporciona una API RESTful para la gestión de productos en una tienda online. La aplicación está diseñada siguiendo las mejores prácticas de desarrollo web y arquitectura MVC (Modelo-Vista-Controlador).

### ✨ Características Principales

- **CRUD Completo**: Crear, leer, actualizar y eliminar productos
- **API RESTful**: Endpoints bien estructurados siguiendo convenciones REST
- **Base de Datos MongoDB**: Almacenamiento NoSQL escalable
- **Validación de Datos**: Validación tanto en el modelo como en el controlador
- **Manejo de Errores**: Respuestas consistentes y manejo robusto de errores
- **Timestamps Automáticos**: Seguimiento automático de fechas de creación y actualización

## 🏗️ Arquitectura del Proyecto

### Estructura de Directorios

```
product-store-mern/
├── backend/                    # Servidor backend
│   ├── config/                # Configuraciones
│   │   └── db.js              # Configuración de conexión a MongoDB
│   ├── controllers/           # Lógica de negocio
│   │   └── product.controller.js  # Controlador de productos
│   ├── models/                # Modelos de datos
│   │   └── product.model.js   # Modelo de producto con Mongoose
│   ├── routes/                # Definición de rutas
│   │   └── product.route.js   # Rutas para productos
│   └── server.js              # Punto de entrada del servidor
├── frontend/                  # Frontend (en desarrollo)
├── package.json               # Dependencias y scripts
└── README.md                  # Documentación
```

### Patrón MVC Implementado

**Modelo (Model)**: `product.model.js`

- Define la estructura de datos del producto
- Establece validaciones y restricciones
- Maneja la interacción directa con MongoDB

**Controlador (Controller)**: `product.controller.js`

- Contiene la lógica de negocio
- Procesa las peticiones HTTP
- Maneja errores y validaciones
- Interactúa con el modelo para operaciones de datos

**Rutas (Routes)**: `product.route.js`

- Define los endpoints de la API
- Mapea las peticiones HTTP a los controladores correspondientes

## 📊 Modelo de Datos

### Esquema de Producto

```javascript
{
  name: {
    type: String,
    required: true,
    description: "Nombre del producto"
  },
  price: {
    type: Number,
    required: true,
    description: "Precio del producto"
  },
  image: {
    type: String,
    required: true,
    description: "URL de la imagen del producto"
  },
  createdAt: {
    type: Date,
    description: "Fecha de creación (automática)"
  },
  updatedAt: {
    type: Date,
    description: "Fecha de última actualización (automática)"
  }
}
```

## 🔗 API Endpoints

### Base URL: `http://localhost:5000/api/products`

| Método   | Endpoint | Descripción                      | Cuerpo de la Petición       |
| -------- | -------- | -------------------------------- | --------------------------- |
| `GET`    | `/`      | Obtener todos los productos      | -                           |
| `POST`   | `/`      | Crear un nuevo producto          | `{ name, price, image }`    |
| `PUT`    | `/:id`   | Actualizar un producto existente | `{ name?, price?, image? }` |
| `DELETE` | `/:id`   | Eliminar un producto             | -                           |

### Ejemplos de Uso

#### Obtener todos los productos

```http
GET http://localhost:5000/api/products
```

**Respuesta:**

```json
{
  "success": true,
  "data": [
    {
      "_id": "64abc123def456789",
      "name": "Laptop Gaming",
      "price": 1299.99,
      "image": "https://example.com/laptop.jpg",
      "createdAt": "2024-08-04T10:30:00.000Z",
      "updatedAt": "2024-08-04T10:30:00.000Z"
    }
  ]
}
```

#### Crear un nuevo producto

```http
POST http://localhost:5000/api/products
Content-Type: application/json

{
  "name": "Smartphone",
  "price": 699.99,
  "image": "https://example.com/phone.jpg"
}
```

#### Actualizar un producto

```http
PUT http://localhost:5000/api/products/64abc123def456789
Content-Type: application/json

{
  "name": "Smartphone Pro",
  "price": 799.99
}
```

#### Eliminar un producto

```http
DELETE http://localhost:5000/api/products/64abc123def456789
```

## 🛠️ Tecnologías Utilizadas

### Backend

- **Node.js**: Entorno de ejecución de JavaScript
- **Express.js**: Framework web para Node.js
- **MongoDB**: Base de datos NoSQL
- **Mongoose**: ODM (Object Document Mapper) para MongoDB
- **dotenv**: Gestión de variables de entorno

### Herramientas de Desarrollo

- **Nodemon**: Reinicio automático del servidor durante el desarrollo

## ⚙️ Configuración e Instalación

### Prerrequisitos

- Node.js (v14 o superior)
- MongoDB (local o Atlas)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <url-del-repositorio>
   cd product-store-mern
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   Crear un archivo `.env` en la raíz del proyecto:

   ```env
   MONGO_URI=mongodb://localhost:27017/product-store
   # o para MongoDB Atlas:
   # MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/product-store
   ```

4. **Iniciar el servidor de desarrollo**

   ```bash
   npm run dev
   ```

5. **Verificar la instalación**

   El servidor debería estar ejecutándose en `http://localhost:5000`

## 🔄 Flujo de Trabajo de la Aplicación

### 1. Inicialización del Servidor

- El servidor Express se configura en el puerto 5000
- Se establece conexión con MongoDB
- Se configuran middlewares (JSON parser)
- Se montan las rutas de productos

### 2. Manejo de Peticiones

- Las peticiones HTTP llegan al servidor Express
- Las rutas dirigen las peticiones a los controladores apropiados
- Los controladores procesan la lógica de negocio
- Se realizan operaciones en la base de datos a través de Mongoose
- Se envían respuestas JSON estructuradas al cliente

### 3. Validaciones y Manejo de Errores

- Validación de campos requeridos en creación de productos
- Validación de ObjectId de MongoDB para operaciones por ID
- Manejo consistente de errores con códigos de estado HTTP apropiados
- Logging de errores para debugging

## 🚀 Características Técnicas Destacadas

### Manejo Robusto de Errores

- Validación de datos de entrada
- Verificación de IDs válidos de MongoDB
- Respuestas de error consistentes y descriptivas
- Logging detallado para debugging

### Código Bien Documentado

- Comentarios explicativos en español
- Estructura clara y modular
- Separación de responsabilidades

### Buenas Prácticas

- Uso de async/await para operaciones asíncronas
- Validaciones tanto en modelo como en controlador
- Códigos de estado HTTP semánticamente correctos
- Estructura de respuesta JSON consistente

## 📝 Estructura de Respuestas

### Respuesta Exitosa

```json
{
  "success": true,
  "data": {
    // Datos del producto
  },
  "message": "Mensaje descriptivo (opcional)"
}
```

### Respuesta de Error

```json
{
  "success": false,
  "message": "Descripción del error"
}
```

## 🔮 Próximas Funcionalidades

- **Frontend React**: Interfaz de usuario completa
- **Autenticación de usuarios**: Sistema de login/registro
- **Categorías de productos**: Organización por categorías
- **Búsqueda y filtros**: Funcionalidad de búsqueda avanzada
- **Carrito de compras**: Sistema de gestión de compras
- **Imágenes múltiples**: Soporte para múltiples imágenes por producto

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👨‍💻 Autor

Desarrollado pro Isaias hernandez gomez como proyecto educativo para aprender el stack MERN.

---

_Este proyecto es una demostración de las capacidades del stack MERN para crear aplicaciones web modernas y escalables._
