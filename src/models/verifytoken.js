const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    const token = req.header("auth-header");

    if (!token) return res.status(401).send({status: 'Error', message: 'Access Denied'});

    try {
        const user = await jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = user;
        next();
    } catch (error) {
        return res.status(400).send({status: 'Error', message: 'Invalid Token'});
    }
}