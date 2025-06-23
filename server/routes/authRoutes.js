// backend/routes/authRoutes.js
const express = require('express');
const { registerUser, registerSupplier, loginUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register-user', registerUser);        // Register a normal user
router.post('/register-buyer', registerSupplier); // Register a buyer
router.post('/login', loginUser);                   // Login for both users and suppliers

module.exports = router;
