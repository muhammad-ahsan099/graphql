
const {GraphQLList} = require ('graphql')
const UserType = require('../typeDevs/UserType');

var orderModal = require("../../orders/OrdersModal");


module.exports.USER_LIST = {
    type: new GraphQLList(UserType),
    resolve(parent , args){
        let data =  orderModal.find({})
        return data
    }
}



// module.exports.USER_LIST = {
//     type: new GraphQLList(UserType),
//     resolve: async (parent , args , context)=> {
//         const { token } = parent
//         const myData = await context()
//         console.log('myData', myData.host);
//         console.log('Token from Server.js File: ' , token);
//         let data =  orderModal.find({})
//         return data
//     }
// }