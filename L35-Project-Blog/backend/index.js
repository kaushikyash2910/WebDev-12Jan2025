const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4444;
const cookieParser = require('cookie-parser');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// /api/auth
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.get('/api/auth/me', async (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: 'Authentication Failed', user: null })
    const data = jwt.verify(token, process.env.JWT_SECRET);
    const userId = data.userId;

    const user = await prisma.user.findUnique({
        where: { id: Number(userId) }
    });
    console.log(user);
    res.status(201).json(user)

})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});