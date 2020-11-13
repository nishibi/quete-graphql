var express = require("express");
const { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

// GraphQl Schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
var root = {
  message: () => "Hello World !",
};

// Create an express server and a GraphQl endpoint
var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On localhost:4000/graphql")
);
