const { GraphQLBoolean } = require('graphql');
const controller = require('../model/controller.js');

export default {
    type: new GraphQLObjectType({ 
        name: 'logout',
        fields: { result: { type: GraphQLBoolean } }
    }),
    resolve(root, params, context, ast) {
        const res = controller.logout(...arguments);
        return res;
    }
}