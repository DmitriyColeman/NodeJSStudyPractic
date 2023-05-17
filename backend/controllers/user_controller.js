const user_service = require("../service/user_service.js")

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