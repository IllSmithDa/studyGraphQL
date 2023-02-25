# Graph QL

  1. GraphQL is a query language. It is not a database lol. Graphql is all about
     the comminucating with a more effective means of communicating with an api

  2. Its language is used to let the client (front end) communicate effectivly
     with the server and determine what needs to be returned to the client

  3. Graphql has two types of queries in: a Query and a mutation

    a. Query = Your HTTP get requests will be specifically tied to queries in GraphQL. Query function as your get request in HTTP requests. 

    b. Mutation - incoporates everything to mutating the data and changing the data. You don't specifiy a specific request e.g PUT, DELETE, POST.

    c. You Don't specify a request type, only if it is a query or mutation

# Two ways of working with GraphQL

  1. GraphQL becomes the handler for requests and your client will never
     directly communicate with the backend when you are using GraphQL

    a. GraphQL is the means of communication and a layer between front end and backend completely removing the dependency between front and back end

  2. GraphQL is the backend and directly written into the server

# Differences between GraphQL and Rest 

  1. Only one end point is created and front end developers do not need to track
     and memorize all the different endpoints of the server

  2. GraphQL will not over or under fetch data but will retrieve the exact
     fields that is required by the client. REST will require developers to
     develop specific endpoints and multiple api calls depending on much or how
     little data fields is required. Otherwise REST will retrieve entire entries
     which can lead to bloated requests

