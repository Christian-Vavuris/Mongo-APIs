const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'Thought is Required',
    length: 280
  },

  createdAt: {
    type: Date,
    default: 10/3/2020
  },

  username: {
    type: String,
    required: 'Username is Required'
  },

  reactions: {
    type: Array,
    default: []
  },

});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;