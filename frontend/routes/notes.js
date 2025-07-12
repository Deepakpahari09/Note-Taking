const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Get all notes
router.get('/', async (req, res) => {
  const notes = await Note.find().sort({ pinned: -1, _id: -1 });
  res.json(notes);
});

// Add note
router.post('/', async (req, res) => {
  const newNote = new Note(req.body);
  const saved = await newNote.save();
  res.json(saved);
});

// Delete note
router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Note deleted' });
});

// Update note
router.put('/:id', async (req, res) => {
  const updated = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});
// Update (text, pinned, likes, dislikes)
router.put('/:id', async (req, res) => {
  const updated = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});


module.exports = router;
