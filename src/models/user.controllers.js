const { User } = require("./user.model");

exports.addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(200).send({ status: "OK", savedUser });
  } catch (error) {
    res.status(400).send({ message: "unable to add user" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );
    res.status(200).send({ status: "OK", user });
  } catch (error) {
    res.status(400).send({ message: "unable to log in" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      req.body.username,
      req.body.update,
      {
        new: true,
      }
    );
    res.status(200).send({ status: "OK", user });
  } catch (error) {
    res.status(404).send({ message: "unable to update" });
  }
};
