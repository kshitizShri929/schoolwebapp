const express = require('express');
const { getAllStudents, updateStudent, deleteStudent } = require('../controllers/studentController');
const router = express.Router();

// Get all students
router.get('/', getAllStudents);

// Update student by ID
router.put('/:id', updateStudent);

// Delete student by ID
router.delete('/:id', deleteStudent);

module.exports = router;
