var express = require('express');
var express_graphql = require('express-graphql');
var {buildSchema} = require('graphql');

// GraphQL Schema metods 

var schema = buildSchema(`
type Query{ message:String}
`);
var root = {
    message:()=>'Expected string from the Query'
}

//creating express sever and grpahQL endpoint

var app = express();
app.use('./graphql', express_graphql({
    schema:schema,
    rootValue:root,
    graphiql: false
}));

app.listen(8000, ()=>console.log('Express GraphSQL now Runing on localhost:4000/graphql'));