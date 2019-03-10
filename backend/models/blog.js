const mongoose = require('mongoose');
const BlogSchema = mongoose.Schema({
  title: { type: String, required: true},
  brief: { type: String, required: true},
  content: {type: String},
  status: {type: String}

})
module.exports = mongoose.model('blog',BlogSchema);
