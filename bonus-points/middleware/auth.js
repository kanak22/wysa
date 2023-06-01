const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateJWT = async (req, res, next) => {
  const aToken = req.headers.cookie?.split('; ').find(row => row.startsWith('accesstoken='));
  const authToken = aToken?.replace('accesstoken=', '');

  if (!authToken) {
    res.redirect('/?error=Unauthorised-no-token');
    return;
  }

  const token = authToken.split(' ').pop();

  if (token) {

    try {
      jwt.verify(token, process.env.SECRET_KEY)
    } catch (error) {
      res.redirect('/?error=Invalid-Token');
      return;
    }

    let user = jwt.decode(token);
    user = await User.findOne({ nickname: user.nickname }, { password: 0 })
    if (user) {
      user = user.toJSON();
      req.user = user;
      next();
    } else {
      res.redirect('/?error=Unauthorised');
      return;
    }
  }
};

module.exports = {
  authenticateJWT
};