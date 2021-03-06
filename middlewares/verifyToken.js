const jwt = require('jsonwebtoken');

async function verifyToken(req, res, next) {
    const {authorization} = req.headers;
    try{
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        const {userName, userId} = decoded;
        req.userName = userName;
        req.userId = userId;
        next();
    }
    catch{
        next('Authentication failed');
    }
    
  };

  module.exports = verifyToken;