# Resolver mthods actually have up to four arguments 

  e.g
  const resolvers =  {
    Query: {
      user: (parent, args, context, info) => {
        const { id } = args;
        const user = await User.findOne({ di }); 
        return user;
      }
    }
  }

# parent (first argument)

  1. We actually have three levels of data in the user query including related
     types 
  
  2. parent returns the valye of the previous level 

    e.g
    type User {
      id: ID!
      name: String!      
      friends: [User]
      favoriteMovies: [Movie]
    }

      a. The level here is query -> users -> foveriteMovies

      b. the parent of favoritemovies is user and the parent of user is undefined because query isn't anything

      c. parent level also returns all fields becuase we never strictly limited the fields

# args 

  1. the arguements used to pass into the server to query or mutate data 

# context

  1. context allows you to pass variables that are useful for every resolver.
     
  2. Some variables like tokens could be useful to have access to every query

  3. You can accomplish this by defining your context at the highest app level 

    e.g
    const server = new ApolloServer({ 
      typeDefs, 
      resolvers,
      context: () => {
        return { token: "dafoijs#@", name: "Pedro"}
      }
    });

      a. define context at server initailization

    e.g
    users: (parent, args, context) => {
      console.log(context);
      return UserList;
    },

      a. resolver access the context to access the token and the name 

  4. Very flexible to what you can pass in the context use as models for
     databases, tokens, etc
  

  5. You can access the request or response itself through context by passing it in as an
     argument 

    e.g
    const server = new ApolloServer({ 
      typeDefs, 
      resolvers,
      context: (req, res) => {
        return { req, res, token: "dafoijs#@", name: "Pedro"}
      }
    });

      a. define context at server initailization with req and res in the arguments and return it

    e.g
    users: (parent, args, context) => {
      console.log(context.req.headers);
      return UserList;
    },

      b. can access both in the resolver using context

# info 

  1. contains info about about the graphQL request but is not as detailed as the
     one in context

  2. contains fieldname, path, validation errors, and type schema information 