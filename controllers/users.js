const User = require("../models/user");

module.exports = {
  login,
  signup,
  index,
  addInterests
};

async function login(req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
      return res.json(user);
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

function addInterests(req, res) {
  User.findOne({ username: req.body.user })
    .then(async user => {
      req.body.interests.forEach(interest => {
        user.interests.push(interest);
      });
      await user.save();
      return res.json(user);
    })
    .catch(err => res.status(400).json(err));
}

function index(req, res) {
  User.find({})
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json(err));
}
