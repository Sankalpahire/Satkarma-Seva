const User = require("../models/User");

const UsersCount = async (req, res) => {
  try {
    const count = await User.countDocuments(); // Using the model
    res.status(200).json({ success: true, count });
  } catch (error) {
    console.error("Error counting users:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { UsersCount };
