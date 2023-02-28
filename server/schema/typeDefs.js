// allows us to write schemas and gql will transpile it into readable javascript
const { gql } = require("apollo-server");

//  we can write pure graphql here and don't forget to install extension Apollo
//  GraphQL for easier syntax highlighting
//  type Query will contain all the queries
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }
  enum Nationality {
    CANADA
    UNITED_STATES
    BRAZIL
    CHINA
    CHILE
    MEXICO
    FRANCE
  }
  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = BRAZIL
  }
  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
  }
`

module.exports = {
  typeDefs
}