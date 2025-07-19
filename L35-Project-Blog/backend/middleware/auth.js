const jwt = require('jsonwebtoken');
// const { PrismaClient } = require('../generated/prisma');
// const prisma = new PrismaClient();

module.exports = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log("Auth middleware: ", token);
        if (!token) return res.status(404).json({ messgae: 'invalid token' });

        const data = jwt.verify(token, process.env.JWT_TOKEN);
        console.log(data);
        req.userId = data.id;
        // const user = await prisma.user.findUnique({
        //     where: {id: data.id}
        // })

        // if(!user.isAdmin)  return res.status(401).json({
        //     message: "Not Authorized User"
        // })
        next();
    } catch (error) {
        return res.status(404).json({
            message: 'Invalid Token or Expired Token',
            error
        })
    }
}