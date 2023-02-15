const { movies } = require('../models')
const { tokenVerifier } = require("../helpers/jwt");

const authentication = (req, res, next) => {
  console.log("Authentication works!");

  const { access_token } = req.headers;

  if (!access_token) {
    return res.status(404).json({
      msg: "Token not found",
    });
  } else {
    try {
      const decode = tokenVerifier(access_token);

      req.studentsData = decode;
      next();
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

  const authorization = (req, res, next) => {
  console.log("Authorization works!");
   
  let role = req.studentsData.role;

  if (role === "Admin Staff" ) {
    next();
  } else {
    res.status(400).json("Only Admin Staff who can acces!");
  }
};

module.exports = {
  authentication, authorization
};