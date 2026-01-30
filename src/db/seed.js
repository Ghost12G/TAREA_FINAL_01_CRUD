// hola 
// en este documento se insertan los datos iniciales de la base de datos
// para ejecutar este documento se debe usar node src/db/seed.js
// los datos insertados son los siguientes:
// usuario admin con contraseña admin
// usuario user con contraseña user
// se importa el archivo de la base de datos
import "dotenv/config";
import pool from "../config/database.js";


const createTablesQuery = `
    CREATE TABLE IF NOT EXISTS movies (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        director VARCHAR(100),
        genre VARCHAR(50),
        image_url TEXT,
        release_date DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS promotions (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        discount_percentage DECIMAL(5,2),
        start_date DATE,
        end_date DATE,
        active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

const seedDataQuery = `
    INSERT INTO movies (title, description, director, genre, image_url, release_date) VALUES
    ('Inception', 'A thief who steals corporate secrets through the use of dream-sharing technology.', 'Christopher Nolan', 'Sci-Fi', 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg', '2010-07-16'),
    ('The Matrix', 'A computer hacker learns from mysterious rebels about the true nature of his reality.', 'Lana Wachowski, Lilly Wachowski', 'Sci-Fi', 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', '1999-03-31')
    ON CONFLICT DO NOTHING;

    INSERT INTO promotions (title, description, discount_percentage, start_date, end_date) VALUES
    ('Summer Sale', 'Get 50% off on all movies', 50.00, '2023-06-01', '2023-08-31'),
    ('Winter Sale', 'Get 30% off on all movies', 30.00, '2023-12-01', '2023-12-31')
    ON CONFLICT DO NOTHING;
`;

async function seed() {
    try {
        console.log("Creating tables...");
        await pool.query(createTablesQuery);
        console.log("Tables created successfully.");

        console.log("Seeding data...");
        await pool.query(seedDataQuery);
        console.log("Data seeded successfully.");

        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
}

seed();

