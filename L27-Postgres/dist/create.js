"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
require('dotenv').config();
const { Pool } = require('pg');
exports.pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});
function createUser(name, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const { rows } = yield exports.pool.query(`INSERT INTO users (name, email)
    VALUES ($1, $2)
    RETURNING *`, // This will return all the user details
        [name, email]);
        return rows[0];
    });
}
createUser("Himansh", "himansh@gmail.com");
