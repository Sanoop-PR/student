const express = require('express');
const router = express.Router();
const Marks = require('../models/mark');

// POST route to add marks
router.post('/', async (req, res) => {
  try {
    const { courseName, examinationDateTime, marksObtained, maxMarks } = req.body;

    // Validate request body
    if (!courseName || !examinationDateTime || !marksObtained || !maxMarks) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create new marks document
    const newMarks = new Marks({
      courseName,
      examinationDateTime,
      marksObtained,
      maxMarks
    });

    // Save marks to the database
    await newMarks.save();

    res.status(201).json({ message: 'Marks added successfully' });
  } catch (error) {
    console.error('Error adding marks:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET route to fetch marks
router.get('/', async (req, res) => {
  try {
    const marks = await Marks.find();
    res.status(200).json(marks);
  } catch (error) {
    console.error('Error fetching marks:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
