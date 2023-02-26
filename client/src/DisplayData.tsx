import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { useState } from 'react';

interface User {
  id: number,
  nationality: string,
  username: string,
  name: string,
  age: number,
  friends: {
    name: string,
  }
}

interface Movie {
  id: number,
  name: string,
  isInTheaters: boolean,
  yearOfPublication: number
}

const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      nationality
      username
      age
      name
      friends {
        name
      }
    }
  }
`;
const QUERY_ALL_MOVIES = gql`
  query getAllMovies {
    movies {
      id
      name
      isInTheaters
      yearOfPublication
    }
  }
`
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

export default function DisplayData() {
  const [searchMovie, setSearchMovie] = useState("");
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  const { data: movieData, loading: loadingMovie, error: movieError } = useQuery(QUERY_ALL_MOVIES);

  const [fetchMovie, {data: movieSearchData, error: movieSearchErr}] = useLazyQuery(GET_MOVIE_BY_NAME)


  if (loading) {
    return <h1>Data is loading</h1>
  }
  if (error) console.log(error)
  if (movieData) console.log(movieData.movies);
  if (movieError) console.log(movieError);
  return (
    <div>
      <div style={{ padding: '20px' }}>
        <h1>Movies</h1>
        {
          movieData && movieData.movies.map((movie: Movie) => {
            return (
              <div
                key={movie.id}
              >
                <h3>Name: {movie.name}</h3>
                <p>Year: {movie.yearOfPublication}</p>
                <p>Is in Theaters: { movie.isInTheaters.toString()}</p>
              </div>
            )
          })
        }
      </div>

      <div style={{ padding: '20px' }}>
        <h2>Search Movies</h2>
        <input type="text" onChange={(e) => { setSearchMovie(e.target.value) }} placeholder="Interstallar..." />
        <button onClick={() => { fetchMovie({ variables: {
          movieName: searchMovie
        }}) }}>Search</button>
      </div>

      <div>
        {movieSearchData && 
          <div>
            <h1>Name: {movieSearchData.movie.name}</h1>
            <h3>Year: {movieSearchData.movie.yearOfPublication}</h3>
            <h3>Is in theaters: {movieSearchData.movie.isInTheaters.toString()}</h3>
          </div>
        }
        {movieSearchErr && <h1>Error: movie could not be retrieved</h1>}
      </div>

      <div style={{ padding: '20px' }}>
        <h1>Users</h1>
        {
          data && data.users.map((user: User) => {
            return (
              <div
                key={user.id}
              >
                <h3>Name: {user.name}</h3>
                <p>Username: {user.username}</p>
                <p>Age: {user.age}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}