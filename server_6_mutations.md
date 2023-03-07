# Mutations 

  1. Mutations allow you to make changes to the database and represent the three
     different Rest calls including PUT, DELETE and POST
  
  2. syntax is similar to everything else with keyword being 'type'

    e.g

    type Mutation {
      createUser(name: String!, age: Int!): User!
    }

      a. here we have 'createUser; which will not only create a user but return it

      b. It also require two arguments name and age 

      c. adding arguments directly is good for smaller data but for big data with lots of 
      fields, its better to define the type as the argument 

    e.g
    type Mutation {
      createUser(user: User!): User!
    }

      a. uses the type User to pass in all the fields of user in a single object rather than listing each one as its own argument
  
  3. The most precise method for creating is to use an input because you can specify which fields you want to use for creating user

    e.g
    input createUserInput {
      name: String!
      username: String!
      age: Int = 18
      nationality: Nationality
    }

    type Mutation {
      createUser(input: createUserInput!): User!
    }

      a. note that while are you passing in input, you still are returning User

      b. Input also makes the best sense for adding default values such as age default to 18 if no value is given because the types themselves are merely there for structure of an type

      c. You also can make fields optional in terms of needing to pass them in because the server might be providing that value e.g 'Id' in this case

      d. do not include any fields that are custom typed here

        e.g         
        friends: [User]
        favoriteMovies: [Movie]
  
  4. Mutations also require a resolver which will include all the functions that
     require changing the data. note it has to the same name that was defined in
     when defining it in the Mutation types schema

      e.g

      type Mutation {
        createUser(input: createUserInput!): User
      }
        
        a. we have this type Mutation with createUser

      e.g 
      Mutation: {
        createUser:(parent, args) => {
          const user = args.input
          
          // add user here to database using whatever process is required from your database
        }
      } 
    
        b. Define the function inside the Mutation itself 

        c. argument is called input in the type file so its args.input

  5. Sandbox code for testing it will look something like this: 

    e.g
    mutation NewUser($newInput: createUserInput!) {
      createUser(input: $newInput) {
        id
        name
        age
        nationality
      }
    }
      a. mutation followed by function name and include input to represent args

      b. list the function and the values needed to create user 
  
      c. don't forget to added vars in the variale section with matching argument name 

    e.g
    {
      "newInput": {
        "name": "Joe Rogan",
        "username": "cat3923",
        "age": 23,
      }
    }
      a. 'newInput' in this JSON matches the argument '$newInput' in the createFuntion() and NewUser()

# Updating Mutations

  1. Works very similar to create

  2. define a User Update Input and its function 

    e.g 

    input UpdateUsernameInput {
      id: ID!
      newUsername: String!
    }

    type Mutation {
      createUser(input: createUserInput!): User
      updateUser(input: UpdateUsernameInput!): User
    }
  
  3. Create the resolver function to handle the update

    e.g
    Mutation: {
      updateUser: (parent, args) => {
        const { id, newUsername } = args.input;
        let updatedUser;
        UserList.forEach((user) => {
          if(user.id === Number(id)) {
            user.username = newUsername;
            updatedUser = user;
          }
        })
        return updatedUser;
      }
    }

      a. We pass in both 'id' and 'username' as arguments that we use to first find and match the user and then update its id

      b. convert id to number as it becomes a string in the args

  4. Test on sandbox using this query and variable setting

    e.g 

    mutation UpdateUser($updatedInput: UpdateUsernameInput!) {
      updateUser(input: $updatedInput) {
        id
        username
      }
    }

      a. the two fields are the ones we want to pull out of the database to make the comparisons and update

    e.g

    {
      "updatedInput": {
        "id" : 2,
        "newUsername": "ethiscs"
      }
    }

      a. The variables setup that we are using to update database

# Deleting Mutations follow very similar pattern to all mutations

  1. Define the Mutation types and resolvers

    e.g
    type Mutation {
      createUser(input: createUserInput!): User
      updateUser(input: UpdateUsernameInput!): User
      deleteUser(id: ID!): User
    }

      a. input not necessary as only one field required to delete user

    Mutation: {
      deleteUser: (parent, args) => {
        const { id } = args;
        _.remove(UserList, (user) =>  user.id === Number(id));
        return null;
      }
    }
      
      a. performs remove User using id and don't forget to convert string into number for id as that is the type in the database

  2. Test it on Sandbox

    e.g
    mutation($deleteUserId: ID!) {
      deleteUser(id: $deleteUserId) {
        id
      }
    }
      
      a. no function name necessary as input type wasn't used 

      b. just grabbing id off of user to match input id 

    {
      "deleteUserId": 1
    }

      a. variable deleteUserId used to remove user


