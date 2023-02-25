const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 5,
        name: "Kelly",
        username: "kelly300w",
        age: 20,
        nationality: "CANADA"
      },
      {
        id: 6,
        name: "Wyatt",
        username: "coolio49",
        age: 34,
        nationality: "FRANCE"
      },
    ]
  },
  {
    id: 2,
    name: "Pedro",
    username: "pedrotech",
    age: 23,
    nationality: "BRAZIL"
  },
  {
    id: 3,
    name: "Sarah",
    username: "cameron",
    age: 26,
    nationality: "UNITED_STATES",
    friends: [
      {    
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",}
    ]
  },
  {
    id: 4,
    name: "Rafe",
    username: "refe_castle",
    age: 43,
    nationality: "MEXICO",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "pedrotech",
        age: 23,
        nationality: "BRAZIL"
      },
      {
        id: 3,
        name: "Sarah",
        username: "cameron",
        age: 26,
        nationality: "UNITED_STATES"
      },
    ]
  },
  {
    id: 5,
    name: "Kelly",
    username: "kelly300w",
    age: 20,
    nationality: "CANADA"
  },
  {
    id: 6,
    name: "Wyatt",
    username: "coolio49",
    age: 34,
    nationality: "FRANCE"
  },
]
const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Interstellar",
    yearOfPublication: 2007,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "Superbad",
    yearOfPublication: 2009,
    isInTheaters: true,
  },
  {
    id: 4,
    name: "PedroTech The Movie",
    yearOfPublication: 2035,
    isInTheaters: false,
  },
];
module.exports = {
  UserList,
  MovieList,
}