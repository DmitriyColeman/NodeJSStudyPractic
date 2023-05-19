const user_service = require("../service/user_service.js")

// в контролере собраны все методы для работы в данном случае с пользователем
// вы создаете методы которые в свою очередь определяете ддя каждого эндпоинта
// в роутере у этих методов в круглых скобках есть входные аргументы
// req-то что прилетает от клиента(постман) res-ответ нашего сервера клиенту
// next просто пока не трогайте

class UserController {
    async GetUser(req, res, next)
    {
        try {
            res.json(await user_service.GetAllUsers())
        } catch(e) {
            res.json({"error": "EXCEPTION"})
        }
    }

    async AddUser(req, res, next)
    {
        try {
            res.json({"endpoint": "adduser"})
        } catch(e) {
            res.json({"error": "EXCEPTION"})
        }
    }

    async DelUser(req, res, next)
    {
        try {
            res.json({"endpoint": "deluser"})
        } catch(e) {
            res.json({"error": "EXCEPTION"})
        }
    }
    async UpdateUser(req, res, next)
    {
        try {
            res.json({"endpoint": "upduser"})
        } catch(e) {
            res.json({"error": "EXCEPTION"})
        }
    }
}

module.exports = new UserController()