const { GraphQLNonNull, GraphQLID } = require('graphql');
const type = require('../types/index.js');
const controller = require('../model/controller.js');

export default {
  type: type,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, options, ast) {
    return model.remove(...arguments);
  }
};
