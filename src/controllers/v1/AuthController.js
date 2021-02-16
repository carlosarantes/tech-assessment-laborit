const BaseController = require("./BaseController");
const UserService = require("../../services/v1/UserService");

class AuthController extends BaseController {
        
    async login(req, res) {
        try {
            const { user, token } = await UserService.login(req.body);
            return res.json({ user, token })
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async register(req, res) {
        try {
            const { user, token } = await UserService.register(req.body);
            return res.status(201).json({ message : "Registration completed successfully.", user, token })
        } catch (e) {
            super.returnException(res, e);
        }
    }
}

module.exports = new AuthController();