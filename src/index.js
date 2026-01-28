import "dotenv/config"; // Cargar variables de entorno
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { conectarDB } from "./config/database.js";
import productosRoutes from "./routes/productosRoutes.js";
import authRoutes from "./routes/authRouter.js";
import pagesRouter from "./routes/pagesRouter.js";
import pedidosRoutes from "./routes/pedidosRouter.js";


// Inicializar Express
const app = express();

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware para parsear datos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use("/", pagesRouter);
app.use("/productos", productosRoutes);
app.use("/auth", authRoutes);
app.use("/pedidos", pedidosRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📂 Vistas desde: ${path.join(__dirname, "views")}`);
});

// Conectar a la base de datos
conectarDB();