const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pintrest');

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  contact: Number,
  profileImage: String,
  board: {
    type: Array,
    default: [],
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post',
    },
  ],
});

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);
