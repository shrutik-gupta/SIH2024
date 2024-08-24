// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Sign-In Route
router.post('/api/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username and password
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If user is found, return user details
    res.status(200).json({ message: 'Sign-In successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error, please try again', error });
  }
});

module.exports = router;
