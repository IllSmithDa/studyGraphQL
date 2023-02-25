# How to make a query in GraphQL 

  1. You use a curly brackets '{ }' to make a query to a schema in GraphQL.

  2. Identify Query Schema in the server, match the name of the schema and its
     required arguments required by the schema

    e.g 
    
    type Country{
      code: ID!
      name: String!
      capital: String!
      phone: String
      language: String
    }

    type Query {
      country(code: ID): Country
    }

      a. This 'country' in Query require a argument 'code' with type ID and 
      returns type Country which is a special type defined with fields with basic types

    {
      country(code: "US")
    }
      
      b. This is the query which matchs the name of the schema country with the argument 'code' with the value 'US' which should retrieve type Country that has the value "uS" in its code field 

    {
      country(code: "US") {
        code
        name
        language
      }
    }

      c. Now we have listed not just the argument with the query, we also list the specific fields we wish to return to prevent over or under fetching

  2. The Format of the return will be an object with the fields you requested
     under the data property

     e.g
     {
      "data": {
        "country": {
          "code": "US",
          "name": "United States",
          "language": "english"
        }
      }
     }
    a. the result will always start with root query which in case is country

# Important to match the structure of the Schema and its types when retrieving data 

  e.g 
  type Continent {
    Id: string,
    name: String,
    countries: [Country!]!
  }

  type Country {
    code: ID!
    name: String!
    currency: String
    continent: Continent
  }
  
  a. to retrieve continent, you must specify the fields within continent you
  wish to retrieve along with the other fields 

  e.g 
  {
    country(code: "US") {
      code
      name
      continent {
        Id
        name
        countries {
          name
          capital
        }
      }
    }
  }

  b. This query correctly indentifies the fields in continents what needs to be
  retrieves including a list of countries that only retrieves the name and
  captial of each one. The query will result in the data below: 

  {
    "data": {
      "country": {
        "code": "US",
        "name": "United States",
        "continent": {
          "Id": "NA",
          "name": " North America",
          "countries": [
            {
              "name": "Antigua and Barbuda",
              "capital": "Saint Johns"
            },
            {
              "name": "Mexico",
              "capital": "Mexico City"
            },
            {
              "name": "North America",
              "capital": "Washington DC"
            }
          ]
        }
      }
    }
  }
  c. see how it match the structure of the query that was made above

# You can also combines queries into one 

  e.g. 
  {
    countries {
  		name
    }
    country(code:"US") {
      capital
    }
  }

  a. This fetches all countries in a list as well as a specific country and both
  will appear in the data as part of the same object 

  e.g
  {
    "data": {
      "countries": [
        {
          "name": "Andorra"
        },
        {
          "name": "United Arab Emirates"
        },
        {
          "name": "Afghanistan"
        },
      ],
      "country": {
        "capital": "Washington D.C."
      }
    }
  }

  a. result of the above query

# Note that if you don't have any arguements, skip the '()' so you don't get an error 

  e.g 
  {
    languages {
      name   
    }
  }

  a. A simple query that is getting a list of all languages and only the name
  property of each language. Note that languages is not using '()' because it
  has no filter or arguments

# note that if a data field is required and yet a entry has set that field to null, it will cuase the GraphQl query to give you an error 