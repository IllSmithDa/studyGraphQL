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

# Note that types are also known as scalars 