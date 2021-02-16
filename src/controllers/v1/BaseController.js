class BaseController {
    returnException(res, e) {
        const statusCode = e.statusCode || 400;
        const message = e.message || "Somwthing went wrong :(). Try it later...";
        return res.status(statusCode).json({ message });
    }
}

module.exports = BaseController;