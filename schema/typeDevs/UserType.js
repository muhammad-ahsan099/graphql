const graphql = require('graphql');

const { 
    GraphQLObjectType ,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'user' ,
    fields: ()=>({
        id : {type: GraphQLString} ,
        name: { type: GraphQLString},
        rollno:{type: GraphQLInt} ,
        semes: { type: GraphQLString} ,
        myClass:  { type: GraphQLString} ,
        cgpa:{ type: GraphQLFloat}
    })
})

module.exports = UserType;
