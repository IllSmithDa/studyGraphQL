# Enums 

  1. Can be used to represent a dropdown selection field or when you want a
     field to set to a particular set of values 

     e.g 
     enum Nationality {
      CANADA
      UNITED STATES
      BRAZIL
      CHINA
      CHILE
      MEXICO
      FRANCE
     }
    
    a. created a enum for Nationality that limits possible value to the values mentioned here 

    type User {
      id: ID!
      name: String!
      nationality: Nationality!
    }

    b. newly created Enum now exists as a type which can be used for fields 

  e.g
  qeury getAllUsers {
    users {
      id
      nationality
      friends {
        name
      }
    }
  }

   c. query which also return a list of friends whcih is type User and its field
  'name' along with the other mentioned properties including id and nationality

# Inlcuding other types in Custom Types 

  e.g.
  type User {
    id: ID
    name: String!
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    isInTheaters: Boolean!
  }

