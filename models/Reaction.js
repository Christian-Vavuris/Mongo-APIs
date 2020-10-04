const { Schema, model, isValidObjectId } = require('mongoose');

const reactionSchema = new Schema({
  reactionId: {
    type: Number,
    required: "reactionID is required"
  },

  reactionBody: {
    type: String,
    required: "reactionBody is required"
  },

  username: {
    type: String,
    required: 'Username is Required'
  },

  createdAt: {
    type: Date,
    default: 10/3/2020
  },

});

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;