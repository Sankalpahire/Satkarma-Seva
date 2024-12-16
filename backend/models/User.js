const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true }, // Password to be hashed later
  securityQuestion: { type: String, required: true }, // Security question for resetting password
  securityAnswer: { type: String, required: true }, // Hashed answer to the security question
  donations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }], // Reference to donations they made
});

const User = mongoose.model('User', userSchema);

module.exports = User;
