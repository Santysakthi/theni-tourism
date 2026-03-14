const AuthService = require('../services/authService');

const authController = {
  register: async (req, res, next) => {
    try {
      const user = await AuthService.register(req.body);
      res.status(201).json({
        success: true,
        data: user
      });
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const { phone, password } = req.body;
      const user = await AuthService.login(phone, password);
      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = authController;
