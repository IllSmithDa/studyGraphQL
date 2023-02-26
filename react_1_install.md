# For utilizing GraphQL on the front end, the primary tool for React developers is Apollo Client

  1. create a react app using whatever method. This example uses Vite. Assuming
     Vite is installed 

    e.g 

    npm create vite@latest client react-ts

    npm i 

      a. Creates new app and run npm i to install all packages 
      
  2. Apollo client v3 and upwards 

    a. npm i --save @apollo/client

  
  3. import the ApolloClient, InMemoryCacehe and ApolloProvider from the apollo
     client
  
    e.g
    import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

# ApolloClient, InMemoryCache and ApolloProvider

  1. allows us to connect with an Apollo api

    e.g 
    const client = new ApolloClient({ 
      cache: newInMemoryCache(),
      uri: "http://localhost:4000/graphql"
    })

      a. url is where the apollo server rests and usually in the graphql path

      b. Apollo client allows you to cache data into your browser allowing you cache your request data as long there aren't any changes to the data

    e.g
    return <ApolloProvider><App /></ApolloProvider>

      a. You need to wrap App in an ApolloProvider to give the app the Apollo Client context

