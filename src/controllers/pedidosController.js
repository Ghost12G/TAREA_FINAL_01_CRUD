import pool from "../config/database.js";
// selecionar todos los pedidos
export const getAllOrders = async (req, res) => {
    try {
        const orders = await pool.query('SELECT * FROM pedidos');
        res.json(orders.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los pedidos' });
    }
};

export const getOrderById = async (req, res) => {
    try {
        const order = await pool.query('SELECT * FROM pedidos WHERE id_pedido = $1', [req.params.id]);
        res.json(order.rows[0]);
    } catch (error) {
        console.error("Error al obtener el pedido",error);
        res.status(500).json({ error: 'Error al obtener el pedido' });
    }
};

export const createOrder = async (req, res) => {
    try {
        const newOrder = await pool.query('INSERT INTO pedidos (estado) VALUES ($1)', [req.body.estado]);
        res.json(newOrder.rows[0]);
    } catch (error) {
        console.error("Error al crear el pedido",error);
        res.status(500).json({ error: 'Error al crear el pedido' });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await pool.query('UPDATE pedidos SET estado = $1 WHERE id_pedido = $2', [req.body.estado, req.params.id]);
        res.json(updatedOrder.rows[0]);
    } catch (error) {
        console.error("Error al actualizar el pedido",error);
        res.status(500).json({ error: 'Error al actualizar el pedido' });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await pool.query('DELETE FROM pedidos WHERE id_pedido = $1', [req.params.id]);
        res.json(deletedOrder.rows[0]);
    } catch (error) {
        console.error("Error al eliminar el pedido",error);
        res.status(500).json({ error: 'Error al eliminar el pedido' });
    }
};
