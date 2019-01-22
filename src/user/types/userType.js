const {
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLNonNull,
  } = require('graphql');
  
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type definition',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      username: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
      phone: {
        type: GraphQLString,
      },
      firstName: {
        type: GraphQLString,
      },
      lastName: {
        type: GraphQLString,
      },
    }),
});
  
module.exports = UserType;