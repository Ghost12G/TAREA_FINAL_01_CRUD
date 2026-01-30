import pool from "../config/database.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "tu_secreto_muy_seguro";

export const register = async (req, res) => {
    try {
        const { nombre, email, password, telefono, rol, estado } = req.body;
        const userCheck = await pool.query('SELECT * FROM usuarios WHERE email = $1 OR nombre = $2', [email, nombre]);
        if (userCheck.rows.length > 0) {
            return res.status(404).json({ error: 'Usuario ya existe' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query
            ('INSERT INTO usuarios (nombre,email, password) VALUES ($1, $2, $3) RETURNING id_usuario,nombre,email,telefono,rol,estado,timestamp', [nombre, email, hashedPassword]);

       res.status(201).json({ message: "Usuario registrado exitosamente", user: result.rows[0] });
    } catch (error) {
        console.error('Error al registrar el usuario', error);
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        if (user.rows.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }
        const validPassword = await bycrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }
        const token = jwt.sign({ id_usuario:user.id_usuario, nombre:user.nombre }, SECRET_KEY, { expiresIn: '1h' });
       res.json({ message: "Login successful", token, user: { id_usuario: user.id_usuario, nombre: user.nombre, email: user.email } });
    } catch (error) {
        console.error('Error al iniciar sesión', error);
        res.status(500).json({ error: error.message });
    }
};

// res.status sig










/* 
export const getAllUsers = async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM usuarios');
        res.json(users.rows);
    } catch (error) {
        console.error('Error al obtener los usuarios', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};


export const getUserById = async (req, res) => {
    try {
        const user = await pool.query('SELECT * FROM usuarios WHERE id_usuario = $1', [req.params.id]);
        res.json(user.rows[0]);
    } catch (error) {
        console.error('Error al obtener el usuario', error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};


export const createUser = async (req, res) => {
    try {
        const newUser = await pool.query('INSERT INTO usuarios (nombre, email, password, telefono,rol,estado) VALUES ($1, $2, $3, $4, $5, $6)', [req.body.nombre, req.body.email, req.body.password, req.body.telefono, req.body.rol, req.body.estado]);
        res.json(newUser.rows[0]);
    } catch (error) {
        console.error('Error al crear el usuario', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};


export const updateUser = async (req, res) => {
    try {
        const updatedUser = await pool.query('UPDATE usuarios SET nombre = $1, email = $2, password = $3, telefono = $4, rol = $5, estado = $6 WHERE id_usuario = $7', [req.body.nombre, req.body.email, req.body.password, req.body.telefono, req.body.rol, req.body.estado, req.params.id]);
        res.json(updatedUser.rows[0]);
    } catch (error) {
        console.error('Error al actualizar el usuario', error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};


export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await pool.query('DELETE FROM usuarios WHERE id_usuario = $1', [req.params.id]);
        res.json(deletedUser.rows[0]);
    } catch (error) {
        console.error('Error al eliminar el usuario', error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};


 */