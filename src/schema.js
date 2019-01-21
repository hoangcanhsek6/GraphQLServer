const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const mutations = require('./mutations.js');

module.exports = new GraphQLSchema({
    mutation: new GraphQLObjectType({ name: 'Mutation', fields: mutations }),
    query: new GraphQLObjectType( { name: 'Query', fields: mutations } )
});