# �️ Sistema de Gestión de Restaurante

Aplicación web para la gestión integral de un restaurante desarrollada con Node.js y Express.

## 📋 Descripción

Este proyecto es una aplicación web construida con Express.js diseñada para gestionar las operaciones de un restaurante. El sistema utiliza EJS como motor de plantillas para renderizar vistas dinámicas y ofrece una interfaz intuitiva para la administración del negocio.

## 🚀 Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución de JavaScript
- **Express.js** - Framework web para Node.js
- **EJS** - Motor de plantillas para renderizado de vistas
- **Morgan** - Middleware para logging de peticiones HTTP
- **dotenv** - Gestión de variables de entorno
- **Nodemon** - Herramienta de desarrollo para reinicio automático del servidor

## 📦 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/PROYECTO_MOVIES.git
```

2. Navega al directorio del proyecto:
```bash
cd PROYECTO_MOVIES
```

3. Instala las dependencias:
```bash
npm install
```

4. Crea un archivo `.env` en la raíz del proyecto para tus variables de entorno (opcional):
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=restaurante_db
```

## 🎯 Uso

### Modo Desarrollo

Para ejecutar el proyecto en modo desarrollo con recarga automática:

```bash
npm run dev
```

### Modo Producción

Para ejecutar el proyecto en modo producción:

```bash
npm start
```

El servidor se iniciará y estará disponible en `http://localhost:3000` (o el puerto que hayas configurado).

## 📁 Estructura del Proyecto

```
PROYECTO_MOVIES/
│
├── src/
│   └── index.js          # Archivo principal de la aplicación
│
├── node_modules/         # Dependencias del proyecto
├── package.json          # Configuración del proyecto y dependencias
├── package-lock.json     # Versiones exactas de las dependencias
└── README.md            # Este archivo
```

## 🛠️ Scripts Disponibles

- `npm start` - Inicia la aplicación en modo producción
- `npm run dev` - Inicia la aplicación en modo desarrollo con Nodemon

## ✨ Funcionalidades Principales

### 🍔 Gestión de Menú
- Agregar, editar y eliminar platillos
- Categorización de productos (entradas, platos fuertes, postres, bebidas)
- Gestión de precios y disponibilidad

### 🧾 Sistema de Pedidos
- Toma de pedidos de mesas
- Seguimiento del estado de pedidos (pendiente, en preparación, servido)
- Historial de pedidos

### 🪑 Gestión de Mesas
- Control de mesas disponibles y ocupadas
- Asignación de pedidos a mesas
- Gestión de capacidad

### 💰 Sistema de Facturación
- Generación de cuentas
- Cálculo de totales con impuestos
- Registro de ventas

## 📝 Próximas Funcionalidades

- [ ] Sistema de autenticación para empleados (mesero, cocinero, administrador)
- [ ] Dashboard con estadísticas de ventas
- [ ] Sistema de reservaciones
- [ ] Gestión de inventario
- [ ] Reportes de ventas diarias/mensuales
- [ ] Integración con sistema de pagos
- [ ] App móvil para meseros
- [ ] Sistema de feedback de clientes

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## ✍️ Autor

**Tu Nombre** - Desarrollador

---

⭐ Si este proyecto te ha sido útil, no olvides darle una estrella en GitHub
