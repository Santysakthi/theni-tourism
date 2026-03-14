const AuthModel = require('../models/authModel');

const AuthService = {
  register: async (userData) => {
    const { name, phone, password } = userData;
    
    // Simple validation
    if (!name || !phone || !password) {
      throw new Error('Name, phone, and password are required');
    }

    // Check if user already exists
    const existingUser = await AuthModel.findByPhone(phone);
    if (existingUser) {
      const error = new Error('User with this phone number already exists');
      error.statusCode = 400;
      throw error;
    }

    return await AuthModel.createUser(userData);
  },

  login: async (phone, password) => {
    if (!phone || !password) {
      throw new Error('Phone and password are required');
    }

    const user = await AuthModel.findByPhone(phone);
    if (!user || user.password !== password) {
      const error = new Error('Invalid phone or password');
      error.statusCode = 401;
      throw error;
    }

    return user;
  }
};

module.exports = AuthService;
