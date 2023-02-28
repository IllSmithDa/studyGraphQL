# GraphQL has basics types similar to TypeScript or any typed language

   1. There are 5 basic types in GraphQL

      a. ID, String, Int, Float, Boolean
   
      e.g
      type User {
         id: ID
         name: String
         age: Int
         height: Float
         isMarried: Boolean
      }

   2. ID type is used for well.. IDs - a unique identifier used to fetch a
      object as key for a cache. Can use a String or an Integer to represent its
      value
      
   3. The object like structure and keyword 'type' combines the properties under
      it to create a complex type like type 'User'. It can then be reused and
      mentioned in other types you create or even within the created type
      itself. 

      e.g
      type User {
         age: Int
         height: Float
         isMarried: Boolean
         friends: [User]
         favoriteFoods: [String]
      }

      a. the the square brackets represents the fact that this type is an array
      because some properties require multiple entries

      b. The user type in friends means we will be able to retrieve and handle
      all the fields that is in type User i.e age, height isMarried, and
      favorite foods 

      e.g 

      type User {
         age: Int
         height: Float
         isMarried; Boolean 
         videos: [Video]
      }

      type Video {
         id: ID,
         length: Float,
         title: String,
      }

      a. You can see that type User includes a property 'videos' that is set to
      having a list of type 'Video' which is defined right below. 
      
      b. You can access each of the properties of Video in each video entry in the list of videos
      in User. 

# Using '!' to set fields as required 

   1. By default, you can set values null or the asked type. However, if you
      don't want to allow null as a value for a property, you can add the '!'
      after the type

      e.g
      type User {
         ID: Int!
         height: Float
      }

      a. height can be set to null while the exclamation after ID means that
      only type Integer is acceptable for that field

   2. By default fields can be set to null and therefore optional which is nice
      if you want  fields to be optional for some while requiring more important
      fields using '!'.

   3. You can also set arrays to required and the type in the array itself 

      e.g
      type User {
         videos: [Video!];
      }

      b. You dont' need to have an array but if you do provide a value it must
      be of type Video

      e.g
      type User {
         videos: [Video!]!
      }

      c. Must include an array and must of the type Video

   4. Note that types are also known as scalars 

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
      nationality: Nationality
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

  2. Note that be careful when making enums required because they are case
     sensitive and if the argument passed does not match exactly, it will result
     in a error

     e.g nationality: Nationality!

      a. nationality set to required 

  3. Setting nationality to have a default value is a good work around if you
     want to ensure that it is not null 

    e.g

    enum Nationality {
      CANADA
      UNITED STATES
      BRAZIL
     }

    input CreateUserInput {
      name: String!
      username: String!
      nationality: Nationality = BRAZIL
    }
      a. nationality is default to BRAZIL if it not defined

# Union types 

   1. Similar to typscript, you can set multiple types for things like error
      handling by using 'union' keyword 

      e.g
      type SuccessUsersResult {
         users: [User!]!
      }
      type ErrorUsersResult {
         message: String!
      }
      union UserResult = SuccessUsersResult | ErrorUsersResult

         a. This will result either a list of type User or a error message 

   2. Cosume the union type through a custom resolver function

   e.g
   const resolvers = {
      UsersResult: {
         __resolveType(obj) {
            if (obj.users) {
               return "SuccessUsersResult";
            }
            if (obj.message) {
               return "ErrorUsersResult";
            }
            return null;
         }
      }
   }
   Query: {
      users:() {
         if(UserList) return { users: UserList };
         return { message: "error: userlist not found"};
      }
   }
      a. we now return an error or a userlist 

   3. Query for users on the front end

      e.g
      query UserQuery {
         users {
            ...on SuccessUsersResult {
               users {
                  id
                  name
               }
            }
            ...on ErrorUsersResult {
               message
            }
         }
      }

         a. Simply queries for userlist and return the list or the error message
         we set up on type definition.