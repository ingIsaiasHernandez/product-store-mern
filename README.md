# 🛍️ Product Store MERN

Una aplicación web de tienda de productos desarrollada con el stack MERN (MongoDB, Express.js, React.js, Node.js) que permite gestionar un catálogo de productos con operaciones CRUD completas.

## 🚀 Características

- **CRUD Completo**: Crear, leer, actualizar y eliminar productos
- **API RESTful**: Endpoints bien estructurados
- **MongoDB**: Base de datos NoSQL escalable
- **Validación de Datos**: Validación robusta en modelo y controlador
- **Manejo de Errores**: Respuestas consistentes
- **Arquitectura MVC**: Código bien organizado y modular

## 📊 Modelo de Producto

```javascript
{
  name: String (requerido),
  price: Number (requerido),
  image: String (requerido),
  createdAt: Date (automático),
  updatedAt: Date (automático)
}
```

## 🔗 API Endpoints

**Base URL**: `http://localhost:5000/api/products`

| Método | Endpoint | Descripción                 | Cuerpo                    |
| ------ | -------- | --------------------------- | ------------------------- |
| GET    | `/`      | Obtener todos los productos | -                         |
| POST   | `/`      | Crear producto              | `{name, price, image}`    |
| PUT    | `/:id`   | Actualizar producto         | `{name?, price?, image?}` |
| DELETE | `/:id`   | Eliminar producto           | -                         |

## ⚙️ Instalación y Uso

### Prerrequisitos

- Node.js (v14+)
- MongoDB

### Configuración

1. **Clonar e instalar**

```bash
git clone <url-repositorio>
cd product-store-mern
npm install
```

2. **Variables de entorno**

```env
MONGO_URI=mongodb://localhost:27017/product-store
```

3. **Ejecutar**

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:5000`

## 🏗️ Estructura del Proyecto

```
backend/
├── config/db.js              # Conexión MongoDB
├── controllers/product.controller.js  # Lógica de negocio
├── models/product.model.js    # Modelo Mongoose
├── routes/product.route.js    # Rutas API
└── server.js                  # Servidor principal
```

## 🛠️ Tecnologías

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Dev Tools**: Nodemon, dotenv

## 📋 Ejemplos de Uso

### Crear producto

```bash
POST /api/products
{
  "name": "Laptop Gaming",
  "price": 1299.99,
  "image": "https://example.com/laptop.jpg"
}
```

### Respuesta exitosa

```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "Laptop Gaming",
    "price": 1299.99,
    "image": "https://example.com/laptop.jpg",
    "createdAt": "2024-08-04T10:30:00.000Z",
    "updatedAt": "2024-08-04T10:30:00.000Z"
  }
}
```

## 🔮 Próximas Funcionalidades

- Frontend React
- Autenticación de usuarios
- Categorías de productos
- Carrito de compras

## 👨‍💻 Autor

Desarrollado por Isaias Hernandez Gomez como proyecto educativo para aprender el stack MERN.

---

_Proyecto de demostración del stack MERN para aplicaciones web modernas._
