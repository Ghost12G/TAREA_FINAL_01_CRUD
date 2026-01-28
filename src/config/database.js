import pg from "pg";

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false,
    },
});

// CUANDO ES FUNCION = async  y vamos a exportarlo a inde.js donde veremos express
export async function conectarDB() {
    try {
        const cliente = await pool.connect();//es metodo de poll Pide una conexión al pool--Vas a un estacionamiento, te prestan un auto para usarlo.
        console.log("Conexión exitosa a la base de datos");
        cliente.release();// Devuelve la conexión al pool---La deja libre para otro uso
        // Devuelves el auto al estacionamiento para que otro lo use.
    } catch (error) {
        console.error("Error al conectar a la base de datos", error);
    }
}


export default pool;