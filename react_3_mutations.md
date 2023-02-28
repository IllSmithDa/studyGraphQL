# Mutations - create function

  1. mutations are how we can add, change or delete data using GraphQL 

  2. Create a form to handle user input 

    e.g 
    <div>
      <input type="text" placeholder"name" />
      <input type="text" placeholder"username" />
      <input type="number" placeholder=age" />
      <input type="text" placeholder"nationality" />
      <button>Create</button>
    </div>

  3. Create the query uisng gql

    e.g
    const CREATE_NEW_USER = gql`
      mutation CreateUser($data: CreateUserInput!) {
        createUser(input: $data) {
          name
          username
          id
        }
      }
    `

      a. Note that we pass in the type 'CreateUserInput' that is in the typeDefs in the server


  3. 'useMutation' hook to pass a mutation function

    e.g
    const [newUser, {error: userError} ] = useMutation(CREATE_NEW_USER);

    a. Note that the name of function 'newUser' is arbitrarily named to demonstrate that you can name the function here however you want 

  4. Call the function 'newUser' 

    e.g
    <button onClick={() => {
      newUser({ variables: { data: { name, username, age, nationality }}})
    }}>
      Create
    </button>

      a. Remember to have object parameters with variables as the outer property and to match the inner property 'data' with what is in the query you written 'CREATE_NEW_USER'

# Data Refetching

  1. You can refetch data after the database has been updated. Especially useful
     if you have a list of data that needs to be updated after database mutation

  2. To do so, we need to make a change to our existing useQuery() by adding
     refetch in the defining brackets

     e.g
    const {data, loading, error, refetch:fetchUpdatedUsers } = useQuery(QUERY_ALL_USERS);
  
  3. Then, we call the refetch function 'fetchedUpdatedUsers' which will refetch
     all the users in our database.

    e.g
    <button onClick={() => {
      newUser({ variables: { data: { name, username, age, nationality }}})
      // call the function
      fetchUpdatedUsers();
    }}>
      Create
    </button>

      a. After new user is created, the refetch function is called and will pull the database including the newly added user
    
  4. Refetching will update the component to see the new values so we do not
     need to manually update our data. Refetch will do this for us.