const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if(!fullName && !email && !password) {
    res.status(400);
    throw new Error('Please provide all required fields')
  }

  // check if user exists
  const userExists = await User.findOne({ email });

  if(userExists) {
    res.status(400);
    throw new Error('User already Exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    fullName,
    email,
    password: hashedPassword
  })

  if(user) {
    res.status(201).json({
      _id: user.id,
      fullName: user.fullName,
      email: user.email,
      token: generateToken(user.id)
    })
  } else {
    res.status(400);
    throw new Error('Invalid User Data')
  }

});

// POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({email});

  if(user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      fullName: user.fullName,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error("Invalid Credentials")
  }
});

const getMe = asyncHandler(async (req, res) => {
  const { _id, fullName, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    fullName,
    email
  })

});

const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
}

module.exports = {
  registerUser,
  loginUser,
  getMe
}