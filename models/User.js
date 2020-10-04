const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: 'Username is Required'
  },

  email: {
    type: String,
    unique: true,
    required: 'Email is Required',
  },

  thoughts: {
    type: Array,
    default: []
  },

  friends: {
    type: Array,
    default: []
  },

});

const User = model('User', userSchema);

module.exports = User;