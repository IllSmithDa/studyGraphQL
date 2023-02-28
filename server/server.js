// grabbing apoller server
const { ApolloServer } = require("apollo-server");

// typedefs represents the different types that represent the schema of your
// api. This is imported from typeDefs file from the schema folder 
const { typeDefs } = require("./schema/typeDefs");

// import your resolvers 
const { resolvers } = require("./schema/resolvers");

// configure apollo server by creating an instance of apollo server 
// typeDefs represents all the different types and the all the graphql functions that
// are written and ran are enclosed in a variable called resolvers
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: ({ req, res }) => {
    return { res, req, token: "dafoijs#@", name: "Pedro"}
  }
});


server
  .listen()
  .then(({url}) => {
    console.log(`Server is running at: ${url}`)
  })