# ALl Graphql Apis must include some sort of Schema 

  1. This schema describes all of the data that will exist in your api. 

  2. Every Schema will have a root type called Query 

  3. There will be fields in the Query that represents all the types of 
  query that need to be made to the api. 

# Writing a Query

  1. initiate a Query using syntax `type Query` followed by a object like
     structure 

     e.g
     type Query {

     }
  2. Add properties name followed by type of value you wan to that property to
     return 

    e.g. 
    type Query {
      users: [User]
    } 

    a. Retreive a list of all type User

    e.g 

    type Query {
      users: [User!]!
      user(id: ID)
    }

    b. in additional to retrieving all users, you can set parameter with a field to fetch 
    a more specific User using the 'id' field with type ID

    c. '!' outside square bracket means it cannot be null, and '!' inside means it has to type User inside the array.

# Filtering Queries and Inputs

  1. You can make more complex queries that require multiple paramteres to
     identify an entry or entries that you are looking for 

     e.g
     type Query {
      user(id: ID, name: String): User
     }

     a. here we are matching a user not just based on ID but also its name

  2. More commonly, you can also just define an input to include all needed fields to filter
     out the search 

     e.g
     input UserInput {
      id: ID
      name: String,
     }

     type Query {
      user(input: UserInput): User
     }