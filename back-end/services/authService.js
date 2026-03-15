const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthModel = require('../models/authModel');

const JWT_SECRET = process.env.JWT_SECRET || 'theni-tourism-secret-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

const AuthService = {
  register: async (userData) => {
    const { name, phone, password } = userData;

    if (!name || !phone || !password) {
      throw new Error('Name, phone, and password are required');
    }

    const existingUser = await AuthModel.findByPhone(phone);
    if (existingUser) {
      const error = new Error('User with this phone number already exists');
      error.statusCode = 400;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await AuthModel.createUser({
      name,
      phone,
      password: hashedPassword,
    });

    const { password: _, ...userWithoutPassword } = user;
    const token = jwt.sign(
      { userId: user.id, phone: user.phone },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    return { user: userWithoutPassword, token };
  },

  login: async (phone, password) => {
    if (!phone || !password) {
      throw new Error('Phone and password are required');
    }

    const user = await AuthModel.findByPhone(phone);
    if (!user) {
      const error = new Error('Invalid user');
      error.statusCode = 401;
      throw error;
    }

    console.log("passwordpassword : ",password,user.password);
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error('Invalid phone or password , please type correctgly');
      error.statusCode = 401;
      throw error;
    }

    const { password: _, ...userWithoutPassword } = user;
    const token = jwt.sign(
      { userId: user.id, phone: user.phone },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    return { user: userWithoutPassword, token };
  },
};

module.exports = AuthService;
