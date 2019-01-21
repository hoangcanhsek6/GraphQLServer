const { GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql');
const controller = require('../model/controller.js');

module.exports = {
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
}