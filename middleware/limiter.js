const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3, // Limit each IP to 3 request per window ( here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the RateLimit headers
    legacyHeaders: false, // disable the X-RateLimit headers
})

module.exports = limiter;