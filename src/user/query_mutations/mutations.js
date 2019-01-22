const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const userType = require('../types/userType.js');
const addUserType = require('../types/addUserType.js');
const controller = require('../model/controller.js');
 
const userMutations = {
  remove: {
    type: userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, options, ast) {
    return controller.remove(...arguments);
  }
  },
  register: {
    type: addUserType,
    args: {
      username: { name: 'username', type: GraphQLString },
      password: { name: 'password', type: GraphQLString }
    },
    resolve(root, params, context, ast) {
      const res = controller.register(...arguments);
      return res;
    }
  }
};

module.exports = userMutations 
 