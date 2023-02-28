# Making a Query

  1. Import gql and useQuery from '@apollo/client'

    e.g
    import { useQuery, gql } from '@apollo/client';

  2. create a apollo context to write query using gql

    e.g 
    const QUERY_ALL_USERS = gql`
      query getAllUsers {
        users {
          id
          nationality
          username
          friends {
            name
          }
        }
      }
    `;

    a. This query allows us to retrieve all users from the server and should be written outside your functions at the top of the file

  3. Consume the query in the function using the 'useQuery()' function with the
     query as its argument

    e.g
    const { data } = useQuery(QUERY_ALL_USERS);

      a. The query above has been set to QUERY_ALL_USERS and has been passed as an argument into 'useQuery()' function

# Query Options

  1. When using useQuery, you call pull other things besides the data 

  2. You can pull loading state which will render a loading state html until
     data is returned 

    e.g
    const { data, loading } = useQuery(QUERY_ALL_USERS);
    if (loading) {
      return <h1>Data is loading</h1>
    }

  3. you can grab error for error handling 

    e.g
    const { data, loading, error } = useQuery(QUERY_ALL_USERS);
    if (error) {
      console.log(error);
    }

# Query using arguments

  1. Set up the Query action similar to how it is done for retrieving all object
     except you will include the field you want to search by 

    e.g
    const GET_MOVIE_BY_NAME = gql`
      query Movie($movieName: String!) {
        movie(name: $movieName) {
          name
          id
          isInTheaters
          yearOfPublication
        }
      }
    `
      a. You need to list field you want to return and the field to base your search as arguements

  1. To query by name, id or whatever variable you need, you can use
     useLazyQuery to set up function name and the Query action
     https://stackoverflow.com/questions/68055994/apollo-react-why-cant-query-inside-useeffect-hook

    e.g
    const [fetchMovie, {data: movieData, error: movieErr}] = useLazyQuery(GET_MOVIE_BY_NAME)

  3. Call the function using the button 'onclick' or soeme other kind of user event

    e.g
    <button onClick={() => { fetchMovie({ variables: {
      movieName: searchMovie
    }}) }}>Search</button>

    a. the function fetchMovie contains a object as its argument and the object has a special built in property called 'variables' where you pass the value to the query variable 'moviename'
    
    e.g 
    { varaibles: { movieName: searchMovie }} 

# Mutli Query
  1. GraphQL is very flexible in the types of data you cam return.

    e.g
    query ExmapleQuery {
      users {
        id
        name
      }
      movies {
        name
      }
    }

      a. We query for both movies and users at separate entities at the same time 

      b. will return a data structure with both a list of movie and a list of users under 
      the data property

      e.g.
      {
        "data": {
          "users": [
            {
              "id": 1,
              "name": "tyler"
            }
          ],
          "movies": [
            {
              "id": 1,
              "name": "Forrest Gump"
            },
            {
              "id": 2,
              "name": "Food Inc"
            }
          ]
        }
      }

