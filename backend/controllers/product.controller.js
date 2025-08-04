// Importamos mongoose para validaciones de ObjectId
import mongoose from "mongoose";
// Importamos el modelo de Product desde la carpeta models
import Product from "../models/product.model.js";

// Función para obtener todos los productos de la base de datos
export const getProducts = async (req, res) => {
  try {
    // Buscamos todos los productos en la base de datos (objeto vacío {} significa "todos")
    const products = await Product.find({});
    // Enviamos respuesta exitosa con status 200 y los productos encontrados
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    // Si hay error, lo registramos en consola para debugging
    console.log("Error fetching products:", error.message);
    // Enviamos respuesta de error con status 500 (error interno del servidor)
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Función para crear un nuevo producto en la base de datos
export const createProduct = async (req, res) => {
  // Extraemos los datos del producto del cuerpo de la petición
  const product = req.body;

  // Validamos que todos los campos requeridos estén presentes
  if (!product.name || !product.price || !product.image) {
    // Si faltan campos, devolvemos error 400 (Bad Request)
    return res
      .status(400)
      .json({ success: false, message: "Please provide all required fields" });
  }

  // Creamos una nueva instancia del modelo Product con los datos recibidos
  const newProduct = new Product(product);

  try {
    // Guardamos el producto en la base de datos
    await newProduct.save();
    // Enviamos respuesta exitosa con status 201 (Created) y los datos del producto creado
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    // Si hay error al guardar, lo registramos en consola
    console.error("Error creating product:", error.message);
    // Enviamos respuesta de error con status 500
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Función para eliminar un producto de la base de datos
export const deleteProduct = async (req, res) => {
  // Extraemos el ID del producto desde los parámetros de la URL
  const { id } = req.params;

  // Validamos que el ID sea un ObjectId válido de MongoDB
  if (!mongoose.Types.ObjectId.isValid(id)) {
    // Si el ID no es válido, devolvemos error 404 (Not Found)
    return res
      .status(404)
      .json({ success: false, message: "Invalid product ID" });
  }

  try {
    // Intentamos encontrar y eliminar el producto por su ID
    const deletedProduct = await Product.findByIdAndDelete(id);

    // Si no se encontró el producto (deletedProduct es null)
    if (!deletedProduct) {
      // Devolvemos error 404 indicando que el producto no existe
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Si todo sale bien, enviamos respuesta exitosa con status 200
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    // Si hay error durante la eliminación, lo registramos en consola
    console.error("Error deleting product:", error.message);
    // Enviamos respuesta de error con status 500
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Función para actualizar un producto existente en la base de datos
export const updateProduct = async (req, res) => {
  // Extraemos el ID del producto desde los parámetros de la URL
  const { id } = req.params;

  // Extraemos los nuevos datos del producto del cuerpo de la petición
  const product = req.body;

  // Validamos que el ID sea un ObjectId válido de MongoDB
  if (!mongoose.Types.ObjectId.isValid(id)) {
    // Si el ID no es válido, devolvemos error 404
    return res
      .status(404)
      .json({ success: false, message: "Invalid product ID" });
  }

  try {
    // Actualizamos el producto y obtenemos el documento actualizado
    // La opción { new: true } hace que retorne el documento después de la actualización
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });

    // Si no se encontró el producto para actualizar
    if (!updatedProduct) {
      // Devolvemos error 404 indicando que el producto no existe
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Si todo sale bien, enviamos respuesta exitosa con los datos actualizados
    res.status(200).json({
      success: true,
      data: updatedProduct, // Incluimos los datos del producto actualizado
      message: "Product updated successfully",
    });
  } catch (error) {
    // Si hay error durante la actualización, lo registramos en consola
    console.error("Error updating product:", error.message);
    // Enviamos respuesta de error con status 500
    res.status(500).json({ success: false, message: "Server error" });
  }
};
