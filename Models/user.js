// 내가 받을 데이터가 이렇게 생겼어.
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User must type name'],
    unique: true,
  },
  token: {
    // 연결 id
    type: String,
  },
  online: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model('User', userSchema);
