// Importa la librería Mongoose para trabajar con MongoDB
import mongoose from "mongoose";

// Define el esquema del producto usando Mongoose Schema
const productSchema = new mongoose.Schema(
  {
    // Campo para el nombre del producto
    name: {
      type: String, // El tipo de dato será una cadena de texto
      required: true, // Este campo es obligatorio (corregido: era "rquired")
    },
    // Campo para el precio del producto
    price: {
      type: Number, // El tipo de dato será un número
      required: true, // Este campo es obligatorio
    },
    // Campo para la imagen del producto (URL o ruta)
    image: {
      type: String, // El tipo de dato será una cadena de texto
      required: true, // Este campo es obligatorio
    },
  },
  {
    // Opciones del esquema
    timestamps: true, // Agrega automáticamente campos createdAt y updatedAt
  }
);

// Crea el modelo Product basado en el esquema definido
const Product = mongoose.model("Product", productSchema);

// Exporta el modelo para poder usarlo en otros archivos
export default Product;
