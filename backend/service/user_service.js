const { Prisma, PrismaClient } = require("@prisma/client");

const prisma_client = new PrismaClient
class UserService {
    async GetAllUsers()
    {
        return prisma_client.user.findMany({});
    }

}

module.exports = new UserService;