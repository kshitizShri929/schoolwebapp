const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/student');
const Teacher = require('../models/teacher');

const register = async (req, res) => {
  const { name, email, password, role, grade, subject } = req.body;

  try {
    const UserModel = role === 'student' ? Student : Teacher;

    // Check if user already exists
    const userExists = await UserModel.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare user data
    let newUserData = {
      name,
      email,
      password: hashedPassword,
    };

    if (role === 'student') {
      if (!grade) return res.status(400).json({ message: 'Grade is required for students' });
      newUserData.grade = grade;
    } else if (role === 'teacher') {
      if (!subject) return res.status(400).json({ message: 'Subject is required for teachers' });
      newUserData.subject = subject;
    }

    // Create and save the new user
    const newUser = new UserModel(newUserData);
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Register Error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const UserModel = role === 'student' ? Student : Teacher;

    // Find user
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    // Match password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate token
    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (err) {
    console.error('Login Error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { register, login };
