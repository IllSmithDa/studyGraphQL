// resolvers respresent all the function you need to retrieve data and manage
// your backend functionalities. For each Query in your schema, a function
// should be used to correspond to it. 
const { UserList, MovieList } = require("../FakeData");
const _= require("lodash");
const resolvers = {
  Query: {
    users: (parent, args, context) => {
      console.log(context.res);
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
  },
  Mutation: {
    createUser:(parent, args) => {
      const user = args.input
      console.log(user);
      // here is where you would add user to database
      const newId = UserList[UserList.length - 1].id + 1;
      user.id = newId;
      UserList.push(user);
      return user;
    },
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
    },
    deleteUser: (parent, args) => {
      const { id } = args;
      _.remove(UserList, (user) =>  user.id === Number(id));
      return null;
    },
  } 
}

module.exports = { resolvers }
