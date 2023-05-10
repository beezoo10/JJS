// create model

import mongoose from 'mongoose';
const { Schema } = mongoose;

const promptSchema = new Schema({
  title: {type: String, required: true},
  hyperlink: {type: String, required: true},
  level: {type: String},
  done: {type: String, default: 'Not Completed'},
  recentDate: {type: String, required: true},
});

const PromptModel = db.model('Prompt', promptSchema);

module.exports = PromptModel;