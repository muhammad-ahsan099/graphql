const graphql = require('graphql')

const { 
    GraphQLObjectType ,
    GraphQLSchema ,
    GraphQLInt,
    GraphQLString,
    GraphQLList 
} = graphql;

//import List is here

const {USER_LIST } = require('./queries/User')
const {ADD_STUDENT , UPDATE_STUDENT , DELETE_STUDENT} = require('./mutations/AddStudent')
const RootQuery = new GraphQLObjectType({
    name: 'abc' ,
    fields: {
        userList: USER_LIST ,
    }
})


const Mutation = new GraphQLObjectType({
    name: 'mutation' ,
    fields: {
        createStudent: ADD_STUDENT  ,
        updateStudent: UPDATE_STUDENT , 
        deleteStudent: DELETE_STUDENT
    }
})

module.exports = new GraphQLSchema( { query : RootQuery , mutation: Mutation})














// const RootQuery = new GraphQLObjectType({
//     name: 'abc' ,
//     fields: {
//         codeimproves: {
//             type: new GraphQLList(UserType),
//             resolve(parent , args){
//                 let data = [{
//                      id: 12 ,  name: 'ahsan' , email: 'ahsan@gmail.com'
//                 } ,
//                 {
//                     id: 13 ,  name: 'ahsan2' , email: 'ahsan2@gmail.com'
//                }
//             ]
//             return data
//             }
//         }
//     }
// })
