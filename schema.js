const graphql = require('graphql');
var dbConnection = require("./config/Db");


const { 
    GraphQLObjectType ,
    GraphQLSchema ,
    GraphQLInt,
    GraphQLString,
    GraphQLList 
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'user' ,
    fields: ()=>({
        id: {type: GraphQLInt} ,
        name: { type: GraphQLString},
        email: {type: GraphQLString}
    })
})

dbConnection();
const RootQuery = new GraphQLObjectType({
    name: 'abc' ,
    fields: {
        codeimproves: {
            type: new GraphQLList(UserType),
            resolve(parent , args){
                let data = [{
                     id: 12 ,  name: 'ahsan' , email: 'ahsan@gmail.com'
                } ,
                {
                    id: 13 ,  name: 'ahsan2' , email: 'ahsan2@gmail.com'
               }
            ]
            return data
            }
        }
    }
})


module.exports = new GraphQLSchema({query : RootQuery})
