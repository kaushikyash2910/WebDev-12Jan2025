const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

module.exports.createPost = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) return res.status(401).json({
        message: "Title and Content both are required"
    })

    const post = await prisma.post.create({
        data: { title, content, authorId: req.userId },
    });
    res.status(201).json(post);
}

exports.getAllPosts = async (req, res) => {

    const posts = await prisma.post.findMany({
        include: { author: { select: { id: true, username: true } } },
        orderBy: { createdAt: 'desc' },
    });
    
    res.status(201).json(posts);
}
