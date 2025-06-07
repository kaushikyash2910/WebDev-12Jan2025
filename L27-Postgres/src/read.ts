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

async function getUserById(id: number): Promise<User | null> {
 const { rows } = await pool.query(
   `SELECT * FROM users`
 );

 console.log(rows);

 return rows[0] ?? null;
}

getUserById(1);
