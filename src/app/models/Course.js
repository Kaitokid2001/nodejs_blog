const { default: mongoose } = require("mongoose");

const slug = require('mongoose-slug-updater') ;
mongoose.plugin(slug);

const mongoose_delete = require('mongoose-delete');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: {type: String, require: true},
  description: {type: String},
  image: {type: String},
  videoID: {type: String, require: true},
  level : {type: String},
  slug: {type: String, slug: 'name', unique: true},
}, {
  timestamps: true,
});

Course.plugin(mongoose_delete, { 
  deletedAt : true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);