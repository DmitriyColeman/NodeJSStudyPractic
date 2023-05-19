const { Prisma, PrismaClient } = require("@prisma/client");

const prisma_client = new PrismaClient
class UserService {
	
	 // первым делом нужно достать из запроса нужную нам информацию с данными о пользователе
    // вся информация хранится в body то есть чтоб к ней обратится мы пишем req.body
    async AddUser(req) {
        // с помощью такой конструкции мы сразу ищем в запросе нужные нам поля для юзера и записываем их в переменные

        const { firstName, lastName, email, numberPhone, position, jobPlace } = req.body;
    
        try {
            // у призмы есть много методов которые вы можете загуглить для создания используется
            // метод create 
            // для работы с бд используем prisma client потом выбираем таблицу с которой
            // будем работать в нашем случаее user после этого вызываем метод что хоти сделать
            const newUser = await prisma_client.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    numberPhone,
                    position,
                    jobPlace,
                    aboutPC: {}
                },
            })
            console.log(newUser)
            //если все успешно возвращаем пользователя обратно в контроллер
            return newUser
        } catch (e) {
            console.log(e)
            return res.json({e})
        }
    }
	
    async GetAllUsers()
    {
        return prisma_client.user.findMany({});
    }

}

module.exports = new UserService;