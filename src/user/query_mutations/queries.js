const { GraphQLString, GraphQLObjectType, GraphQLBoolean } = require('graphql');
const controller = require('../model/controller.js');

const userQueries = {
    login: {
      type: new GraphQLObjectType({
        name: 'login',
        fields: { username: { type: GraphQLString}, message: { type: GraphQLString } }
    }),
    args: {
        username: { name: 'username', type: GraphQLString },
        password: { name: 'password', type: GraphQLString }
    },
    resolve(root, params, context, ast) {
        const res = controller.login(...arguments);
        return res;
    }
    },
    logout: {
        type: new GraphQLObjectType({ 
            name: 'logout',
            fields: { result: { type: GraphQLBoolean } }
        }),
        resolve(root, params, context, ast) {
            const res = controller.logout(...arguments);
            return res;
        }
    }
  };

module.exports = userQueries 