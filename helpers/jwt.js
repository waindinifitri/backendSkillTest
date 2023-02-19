const jwt = require("jsonwebtoken");
const secretKey = "2023";

const tokenGenerator = (student) => {
  console.log(student, "--student");
  const { email, role, id } = student;

  return jwt.sign(
    {
      email,
      role,
      id
    },
    secretKey
  );
};

const tokenVerifier = (access_token) => {
  return jwt.verify(access_token, secretKey);
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};