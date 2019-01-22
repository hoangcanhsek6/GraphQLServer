const {
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLNonNull,
  } = require('graphql');
  
const AddUserType = new GraphQLObjectType({
    name: 'AddUser',
    description: 'Add user type definition',
    fields: () => ({ 
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
  
module.exports = AddUserType;