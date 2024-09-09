const jwt = require("jsonwebtoken");
const CustomAPIError = require('../errors/custom-error');

const login = async(req, res) => {
  const {username, password} = req.body;
  if (!username || !password) {
    throw new CustomAPIError('Username and password are required', 400);
  }
  const id = new Date().getDate()

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {expiresIn:'30d'})

  res.status(200).json({ msg: 'user created', token })
}

const dashboard = async(req, res) => {

  res.status(200).json({ msg: `Hello, ${req.user.username}`, secret:"data" })


}


module.exports = {
  login, dashboard
}
