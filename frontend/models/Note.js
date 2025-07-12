const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: String,
  text: String,
  date: String,
  pinned: Boolean
});

module.exports = mongoose.model('Note', NoteSchema);
