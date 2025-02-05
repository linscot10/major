const jwt = require("jsonwebtoken");


const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers["authorization"]
    console.log(authHeader);
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access Denied ,No token Provided .Please Login to Coninue"
        })
    }
    try {
        const decodeTokenInfo = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decodeTokenInfo);
        req.body.userId = decodeTokenInfo;
        next()
    } catch (error) {
        console.error("something Happened ", error)
        return res.status(500).json({
            success: false,
            message: "Authorization failed ,kindly provide token Login to continue"
        })
    }
}

module.exports = authMiddleware