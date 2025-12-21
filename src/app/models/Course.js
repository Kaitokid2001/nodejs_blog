const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: {type: String, maxLength: 255},
  description: {type: String, maxLength: 600},
  image: {type: String, maxLength: 255},
  // Lưu thời gian được tạo
  createdAt: {type: Date, default: Date.now},
    // Lưu bản ghi được cập nhật
    updateAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Course', Course);