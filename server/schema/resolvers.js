// resolvers respresent all the function you need to retrieve data and manage
// your backend functionalities. For each Query in your schema, a function
// should be used to correspond to it. 
const { UserList, MovieList } = require("../FakeData");
const _= require("lodash");
const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    // args represent the arguments passed by the client such as user id. It is
    // an object and should be treated as such
    user: (parent, args) => {
      const { id } = args;
      // mocking a database get functionality using lodash and userId  
      // set id type to number because the database FakeData has this id value
      // as a number
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const { name } = args;
      const movie = _.find(MovieList, {name})
      return movie;
    },
  },
  User: {
    // filter movies using the publication field 
    favoriteMovies: () => {
      return _.filter(MovieList, (movie) => movie.yearOfPublication >= 2000  && 
      movie.yearOfPublication <= 2010)
    }
  }
}

module.exports = { resolvers }
