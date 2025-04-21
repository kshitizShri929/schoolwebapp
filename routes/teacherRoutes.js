const express = require('express');
const { getAllTeachers, updateTeacher, deleteTeacher } = require('../controllers/teacherController');
const router = express.Router();

// Get all teachers
router.get('/', getAllTeachers);

// Update teacher by ID
router.put('/:id', updateTeacher);

// Delete teacher by ID
router.delete('/:id', deleteTeacher);

module.exports = router;
