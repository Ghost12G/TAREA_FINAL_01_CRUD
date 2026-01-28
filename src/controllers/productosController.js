/* SELECT * FROM productos */
// selecionar todos los productos
import pool from "../config/database.js"; // importacion nueva  

export const getAllProducts = async (req, res) => {
    try {
        const products = await pool.query('SELECT * FROM productos');
        res.json(products.rows);
        // el rows es el nombre que le damos a la tabla ejemplo: SELECT * FROM productos;
        // el pool es el nombre que le damos a la base de datos ejemplo: const pool = new Pool({
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
    // el error 500 es un error interno del servidor
};


// seleccionar por ID
export const getProductById = async (req, res) => {
    try {
        const product = await pool.query('SELECT * FROM productos WHERE id_producto = $1', [req.params.id]);
        res.json(product.rows[0]);
    } catch (error) {
        console.error("Error al obtener el producto",error);
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};  

// Crear Peliculas 
export const createProduct = async (req, res) => {
    try {
        const newProduct = await pool.query('INSERT INTO productos (nombre, precio,imagen_url, estado) VALUES ($1, $2, $3, $4)', [req.body.nombre, req.body.precio, req.body.img_url, req.body.estado]);
        res.json(newProduct.rows[0]);
    } catch (error) {
        console.error("Error al crear el producto",error);
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};



// Actualizar Peliculas ID
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await pool.query('UPDATE productos SET nombre = $1, precio = $2, img_url = $3, estado = $4 WHERE id_producto = $5', [req.body.nombre, req.body.precio, req.body.img_url, req.body.estado, req.params.id]);
        res.json(updatedProduct.rows[0]);
    } catch (error) {
        console.error("Error al actualizar el producto",error);
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};


// Eliminar Peliculas  ID
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await pool.query('DELETE FROM productos WHERE id_producto = $1', [req.params.id]);
        res.json(deletedProduct.rows[0]);
    } catch (error) {
        console.error("Error al eliminar el producto",error);
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};
