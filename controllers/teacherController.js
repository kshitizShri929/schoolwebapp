// const Teacher = require('../models/teacher');

// const getAllTeachers = async (req, res) => {
//   try {
//     const teachers = await Teacher.find();
//     res.json(teachers);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching teachers' });
//   }
// };

// module.exports = { getAllTeachers };

const Teacher = require('../models/teacher');

// Create: Register new teacher (already implemented in authController)

// Read: Get all teachers
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching teachers' });
  }
};

// Update: Update teacher details
const updateTeacher = async (req, res) => {
  const { id } = req.params;
  const { name, subject } = req.body;
  try {
    const teacher = await Teacher.findByIdAndUpdate(id, { name, subject }, { new: true });
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
    res.json(teacher);
  } catch (err) {
    res.status(500).json({ message: 'Error updating teacher' });
  }
};

// Delete: Delete teacher
const deleteTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await Teacher.findByIdAndDelete(id);
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
    res.json({ message: 'Teacher deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting teacher' });
  }
};

module.exports = { getAllTeachers, updateTeacher, deleteTeacher };

