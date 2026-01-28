import  pool from "../config/database.js";

// Sellecioanar todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM usuarios');
        res.json(users.rows);
    } catch (error) {
        console.error('Error al obtener los usuarios', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

// seleccionar un usuario por ID
export const getUserById = async (req, res) => {
    try {
        const user = await pool.query('SELECT * FROM usuarios WHERE id_usuario = $1', [req.params.id]);
        res.json(user.rows[0]);
    } catch (error) {
        console.error('Error al obtener el usuario', error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

// Crear usuario
export const createUser = async (req, res) => {
    try {
        const newUser = await pool.query('INSERT INTO usuarios (nombre, email, password, telefono,rol,estado) VALUES ($1, $2, $3, $4, $5, $6)', [req.body.nombre, req.body.email, req.body.password, req.body.telefono, req.body.rol, req.body.estado]);
        res.json(newUser.rows[0]);
    } catch (error) {
        console.error('Error al crear el usuario', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

// Actualizar usuario
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await pool.query('UPDATE usuarios SET nombre = $1, email = $2, password = $3, telefono = $4, rol = $5, estado = $6 WHERE id_usuario = $7', [req.body.nombre, req.body.email, req.body.password, req.body.telefono, req.body.rol, req.body.estado, req.params.id]);
        res.json(updatedUser.rows[0]);
    } catch (error) {
        console.error('Error al actualizar el usuario', error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};

// Eliminar usuario
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await pool.query('DELETE FROM usuarios WHERE id_usuario = $1', [req.params.id]);
        res.json(deletedUser.rows[0]);
    } catch (error) {
        console.error('Error al eliminar el usuario', error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};


