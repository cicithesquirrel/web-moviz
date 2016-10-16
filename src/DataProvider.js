
const movies = [{
    id: 1,
    title: 'Gone with the wind',
    year: 1939,
    director: 'Victor Fleming, George Cukor, Sam Wood',
    duration: 238
  },
  {
    id: 2,
    title: 'The Sound Of Music',
    year: 1965,
    director: 'Robert Wise',
    duration: 174
  },
  {
    id: 3,
    title: 'Metropolis',
    year: 1927,
    director: 'Fritz Lang',
    duration: 153
  },
  {
    id: 4,
    title: 'King Kong',
    year: 1933,
    director: 'Ernest B. Schoedsack, Merian C. Cooper',
    duration: 100
  },
  {
    id: 5,
    title: 'Bringing Up Baby',
    year: 1938,
    director: 'Howard Hawks',
    duration: 102
  },
  {
    id: 6,
    title: 'M',
    year: 1931,
    director: 'Fritz Lang',
    duration: 112
  }
  ];

const DataProvider = {
    getMovies : function(options) {
        console.log(options);
        return movies;
    } 
};

export default DataProvider;