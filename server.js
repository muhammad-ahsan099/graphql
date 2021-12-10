require("dotenv").config();
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser")
var dbConnection = require("./config/Db");

const PORT = 5000 
const { graphqlHTTP } = require('express-graphql');

const app = express();
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  app.use(cors());

dbConnection();

// const schema = require('./schema');
const schema = require('./schema/index');
app.use(express.json())

// const root = {
//     // can be found in every GraphQl Function 
//     token: '12asdljflj12enkdnoi212jsdlas',
// }

// const context = async (req)=> {
// const host =  req.headers.host
// const token = 'afshdfaskdfhkashfkahsfw'
// return {host , token}
// }

// app.use('/graphql',
// graphqlHTTP( async req=>({
//     schema ,
//     rootValue: root ,
//     graphiql: true ,
//     context: ()=> context(req)
// }))
// )

app.use('/graphql',
graphqlHTTP({
    schema ,
    graphiql: true
})
)

app.get("/", function (req, res) {
    req.clientData;
    // logics main server
    res.send("Server is working");
  });
  
  
  app.listen(PORT , (err) => {
    if (err) {
      console.log("something went wrong", error);
    } else {
        console.log(`App is Running on Port ${PORT}`);
    }
  });

// app.listen(PORT , ()=> {
//     console.log(`App is Running on Port ${PORT}`);
// } )