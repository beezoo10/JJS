// create model
const mongoose = require('mongoose');
const { Schema } = mongoose;


const promptSchema = new Schema({
  title: {type: String, required: true},
  hyperlink: {type: String, required: true},
  level: {type: String, default: "None"},
  done: {type: String, default: 'Not Completed'},
  recentDate: {type: String, default: () => {
    const date = new Date();
    return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
  }},
});

// name for model (noun), what you're using for schema
const Prompt = mongoose.model('Prompt', promptSchema);

module.exports = Prompt;