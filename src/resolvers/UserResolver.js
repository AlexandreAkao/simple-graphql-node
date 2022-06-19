const User = require('../models/User');

const UserResolver = {
  Query: {
    getAllUsers: async () => {
      const users = await User.find();
  
      return users
    }
  }
}

module.exports = UserResolver