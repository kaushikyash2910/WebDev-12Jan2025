require('dotenv').config();
const {Pool} = require('pg');

export const pool = new Pool({
 user:     process.env.DB_USER,
 host:     process.env.DB_HOST,
 database: process.env.DB_NAME,
 password: process.env.DB_PASSWORD,
 port:     Number(process.env.DB_PORT),
});

interface User {
 id: number;
 name: string;
 email: string;
}

async function createUser(name: string, email: string): Promise<User> {
 const { rows } = await pool.query(
   `INSERT INTO users (name, email)
    VALUES ($1, $2)
    RETURNING *`, // This will return all the user details
   [name, email]
 );
 return rows[0];
}

createUser("Himansh","himansh@gmail.com");