const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

module.exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    console.log(title, content);
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


exports.getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
        where: { id: Number(id) },
        include: { author: { select: { id: true, username: true } } }
    });

    console.log("POST BY ID", post);
    res.status(201).json(post);
}

exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = await prisma.post.update({
        where: { id: Number(id) },
        data: {
            title,
            content
        }
    })

    res.status(201).json(post);
}