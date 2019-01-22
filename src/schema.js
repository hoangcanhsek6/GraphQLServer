const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');
const userMutations = require('./user/query_mutations/mutations.js');
const userQueries = require('./user/query_mutations/queries.js');


module.exports = new GraphQLSchema({
    mutation: new GraphQLObjectType({ name: 'Mutation', fields: () => ({
        ...userMutations,
    }) }),
    query: new GraphQLObjectType( { name: 'Query', fields: () => ({
        ...userQueries,
    }), } )
});