# Fragments

  1. set fields to a variable which can be reused by different queries.

  2. Emphasizes the Dry pricniple of programming by allowing to write the
     required fields once and resuse it as a variable so you don't have to write
     the fields every time 

  3. Not useful if fields are different for objects

  4. The fragement cannot be changed after it is set (immutability to the code)

  e.g 

  fragment GetAgeAndName on User {
    age
    name
  }

  query ExampleQuery {
    users {
      ...GetAgeAndName
    }
  }