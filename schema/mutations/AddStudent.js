
const {
    GraphQLInt,
    GraphQLString,
    GraphQLFloat} = require ('graphql')
const UserType = require('../typeDevs/UserType');
const StatusType = require('../typeDevs/StatusType');

var orderModal = require("../../orders/OrdersModal");

module.exports.ADD_STUDENT = {
    type: UserType ,
    args: {
        name: { type: GraphQLString},
        rollno:{type: GraphQLInt} ,
        semes: { type: GraphQLString} ,
        myClass:{ type: GraphQLString} ,
        cgpa:{ type: GraphQLFloat}
    } ,
    resolve (parent , args){
        const newStudent = new orderModal({
            createdAt: new Date(),
            name: args.name,
            rollno: args.rollno,
            semes: args.semes,
            myClass: args.myClass,    
            cgpa: args.cgpa,
          });
        
          newStudent.save((err, success) => {
            console.log("success", success);
            console.log("err", err);
          });

        return args
    }
}


module.exports.UPDATE_STUDENT = {
    type: UserType ,
    args: {
        id: {type: GraphQLString } ,
        name: { type: GraphQLString},
        rollno:{type: GraphQLInt} ,
        semes: { type: GraphQLString} ,
        myClass:{ type: GraphQLString} ,
        cgpa:{ type: GraphQLFloat}
    } ,
    resolve: async (parent , args)=> {
        const  _id = args.id ;

        const updateObj = {
            createdAt: new Date(),
            name: args.name,
            rollno: args.rollno,
            semes: args.semes,
            cgpa: args.cgpa,
            myClass: args.myClass,   
        
          }
        await  orderModal.findByIdAndUpdate(
            _id  ,
            updateObj ,
            {new : true} ,
            console.log("Document id: " , _id),
            console.log("Document Data: " , updateObj),
            (err, data) => {
              console.log("Data is Updated...success:", data);
              console.log("err", err);
            //   if (err) {
            //     res.send("err happen");
            //   }
            //   res.json(data);
            }
          );

        return args
    }
}


module.exports.DELETE_STUDENT = {
    type: StatusType ,
    args: {
        id: {type: GraphQLString}
    } ,
    resolve (parent , args){    
          const  _id  = args.id;
          orderModal.findByIdAndRemove(_id , (err , data) => {
            console.log('Document ID will be here: ' , _id);    
            console.log("Error" , err);
            if (err) {
                return err
            }
            console.log("Document is Deleted!! Successfully");
        });

        return {
            success: true , message: "Successfully Deleted" , err: " " 
        }
    }
}
