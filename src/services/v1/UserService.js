const bcrypt = require("bcryptjs");

const User = require("../../models/User");
const HttpError = require("../../errors/HttpError");

const { generateToken } = require("../../helpers/tokenHelper");

class UserService {
    async register(body) {
        let { name, email, password, role } = body;
 
        let user = await User.findOne({ where : { email } });
        if(user) throw new HttpError("E-mail already in use", 409);

        password = await bcrypt.hash(password, 10);

        user = await User.create({ name, email, password, role });
        user.password = undefined;
        const token =  generateToken({ id: user.id, role : user.role });

        return { user, token };
    }

    async login(body) {
        let { email, password } = body;
        let user = await User.findOne({ where : { email } });
        if(!user) {
            throw new HttpError("This user does not exist.", 401);
        }

        if(!await bcrypt.compare(password, user.password)) {
            throw new HttpError("Invalid credentials.", 401);
        }

        user.password = undefined;
        const token =  generateToken({ id: user.id, role : user.role });

        return { user, token };
    }
}


module.exports = new UserService();