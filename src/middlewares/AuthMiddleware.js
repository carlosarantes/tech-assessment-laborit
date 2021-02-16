const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

const aclControl = {
    "/brands" : {
        "GET" : "PUBLIC",
        "POST" : "ADMIN"
    },
    "/brands/:PARAM" : {
        "GET" : "ADMIN",
        "PUT" : "ADMIN",
        "DELETE" : "ADMIN"
    },
    "/brands/vehicles/:PARAM" : {
        "GET" : "PUBLIC"
    },
    "/models" : {
        "GET" : "PUBLIC",
        "POST" : "ADMIN"
    },
    "/models/:PARAM" : {
        "GET" : "ADMIN",
        "PUT" : "ADMIN",
        "DELETE" : "ADMIN"
    },
    "/models/vehicles/:PARAM" : {
        "GET" : "PUBLIC"
    },
    "/vehicles" : {
        "GET" : "PUBLIC",
        "POST" : "ADMIN"
    },
    "/vehicles/:PARAM" : {
        "GET" : "ADMIN",
        "PUT" : "ADMIN",
        "DELETE" : "ADMIN"
    }
}


const isValidACL = (req, role) => {

    const method = req.method;

    let path = req.path;
    path = path.replace(/[0-9]/g, ":PARAM");

    aclControl[path]
    
    const necessaryRole = aclControl[path][method];
    if (role == "PUBLIC" && necessaryRole == "ADMIN") {
        return false;
    }

    return true;
};

const validateEmail = (email) => {
    const errors = [];
    if (!email || email.length < 8) {
        errors.push("Please, provide a valid email (At least 8 characters).");
    }

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)) {
        errors.push("The e-mail provided is invalid.");
    }

    return errors;
};

const validatePassword = (password) => {
    const errors = [];
    if(!password ||  (password.length < 8 || password.length > 18)) {
        errors.push("Please provide an valid password (Between 8 and 18 characters).")
    }

    return errors;
};

class AuthMiddleware {
    async validateBeforeCreate(req, res, next) {
        const { name, email, password } = req.body;
        const errors = [];

        if (!name || name.length < 3) {
            errors.push("Please, provide a valid name (At least 3 characters).");
        }
        
        errors.concat(validateEmail(email));
        errors.concat(validatePassword(password));

        if (errors.length > 0) {
            return res.status(422).json({ errors });
        }

        return next();
    }

    async validateBeforeLogin (req, res, next) {
        const { email, password } = req.body;
        const errors = [];

        errors.concat(validateEmail(email));
        errors.concat(validatePassword(password));

        if (errors.length > 0) {
            return res.status(422).json({ errors });
        }

        return next();
    }

    validateToken(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send({ "error" : "No token provided." });
        }

        const parts = authHeader.split(' ');
        if(parts.length !== 2) {
            return res.status(401).send({ "error" : "Token has some errors." });
        }

        const [ scheme, token ] = parts;
        if(!/^Bearer$/i.test(scheme)) {
            return res.status(401).send({ "error" : "Malformatted token." });
        }

        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) {
                const message = err.message == 'jwt expired' ? "Your token has expired." : "Your token is invalid.";
                return res.status(401).send({ "error" : message });
            } 

            const role = decoded.role

            req.headers.userId = decoded.id;
            req.headers.role = role;

            if (!isValidACL(req, role)) {
                return res.status(403).json({ "message" : "You are not allowed to perform this action." })   
            }

            return next();
        });
    }
}

module.exports = new AuthMiddleware();