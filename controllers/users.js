const User = require('../models/user');

module.exports = {
  login,
  signup,
  index
};

async function login(req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });
    if(!user) return res.status(401).json({ err: "bad credentials"});
    res.status(200).json(user);
  } catch(err) {
    return res.status(401).json(err);
  }
}

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    res.json(user);
  } catch(err) {
    res.status(400).json(err);
  }
}

function index(req, res) {
  User.find({})
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json(err));
}