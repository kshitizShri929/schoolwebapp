const Student = require('../models/student');

// Create: Register new student (already implemented in authController)

// Read: Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching students' });
  }
};

// Update: Update student details
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, grade } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(id, { name, grade }, { new: true });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: 'Error updating student' });
  }
};

// Delete: Delete student
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByIdAndDelete(id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting student' });
  }
};

module.exports = { getAllStudents, updateStudent, deleteStudent };
