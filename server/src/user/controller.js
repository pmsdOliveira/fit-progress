const bcrypt = require("bcrypt");

const userModel = require("./model");

class User {}

User.prototype.getUsers = (req, res) => {
  userModel.find({}, (err, users) => {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  });
};

User.prototype.getUserById = (req, res) => {
  userModel.find({ _id: req.params.id }, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
};

User.prototype.addUser = async (req, res) => {
  try {
    const body = req.body;
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = new userModel({
      username: body.username,
      name: body.name,
      mail: body.mail,
      password: hashedPassword,
    });
    user.save((err, addedUser) => {
      if (err) {
        res.send(err);
      } else {
        res.send(addedUser);
      }
    });
  } catch {
    res.status(500).send();
  }
};

User.prototype.updateUserById = (req, res) => {
  userModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }, // returns the updated document instead of the outdated
    (err, updatedUser) => {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedUser);
      }
    }
  );
};

User.prototype.deleteUserById = (req, res) => {
  userModel.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if (err) {
      res.send(err);
    } else {
      res.send(deletedUser);
    }
  });
};

module.exports = User;
