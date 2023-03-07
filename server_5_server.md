# To get GraphQL to work on your server, you must install apollo-server 

  1. npm i --save apollo-server

    a. allows api to serve graphql

  2. npm i --save graphql

    a. allows us to use the graphql language for writing schemas and queries

  3. Once you get your apollo server up and running, you can visit it via link 

    a. There is a built in sandbox which you can test your queires 

      e.g
      qeury getAllUsers {
        users {
          id
          name
        }
      }

        a. apollo server sandbox starts with 'query' keyword followed by name and then the 
        Query route from the schema followed by the various fields you wish to return 
    
        b. includes a built in error system that tells you exactly what went wrong

# Type Def

  1. As demonstrated previously in notes, GraphQL needs to have defined types to
     determine what the data fields and type of that field are as well as
     defining end points that will retrieve or manipulate data

     e.g 
       type User {
        id: ID!
        name: String!
        uwername: String!
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
    
    a. several types are defined including Nationality, Movie, the different types of Queries that can be made by client and User 
    
# Resolvers

  1. Writing a GraphQL server requires you to write up resolvera

  2. You write resolvers to handle the action and logic of retrieving data and
     recieving argument to filter and find specific data

    e.g
    Query: {
      users: () => {
        return UserList;
      },
      user: (parent, args) => {
        const { id } = args;
        const user = _.find(UserList, { id: Number(id) });
        return user;
      },
    },

      a. Two queries set up here with the first one simply returning a list of users 
      and the second one returning a specific user base on matching 'id'

  3. Resolvers can be written for other types not just the generic Query which
     is important when we have other types in our type 

    e.g 
    type User {
      id: ID!
      name: String!
      favoriteMovies: [Movie]
    }

    type Movie {
      id: ID!
      name: String!
      yearOfPublication: Int!
    }

      a. type User has a property 'favoriteMovies' which is set to a list of type 'Movie'

    Query {
      users: () => {
        return UserList;
      },
    },

    User: {
      // favorite movies
      favoriteMovies: () => {
        return _.filter(MovieList, (movie) => movie.yearOfPublication >= 2000 
        && movie.yearOfPublication <= 2010 )
      }
    }
    
      b. new Query specific for User is created and used to get the field that is of another Type. We can now query for favorite movies in the front end. 

  4. In the sandbox, we can create a operation to fetch the specific user using
     this syntax

    e.g
    query findUser($userId: ID!) {
      user(id: $userId) {
        friends {
          name  
        }
        nationality
      }
    }

      a. make sure to include the userId variable in the bottom section of the apollo-server query sandbox 

    e.g 
    {
      "userId": 1
    }

      a. setting userId to 1

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
      a. This query in the sandbox needs to variables because it is simply retrieve a list of all users so no argument such as 'Id' is required

