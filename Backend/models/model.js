//Write missing codes here -- done
const mongoose = require('mongoose')
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

var BlogModel = mongoose.model("blog",schema)
module.exports = BlogModel
//Write missing codes here
