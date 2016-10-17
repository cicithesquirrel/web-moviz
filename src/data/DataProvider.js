import 'whatwg-fetch';

const DataProvider = {
    getMovies : function(options, callback) {

      let queryString = '/data.json';
      if (options.filter || options.sort) {
        queryString += '?';
        if (options.filter) {
          queryString += 'f=' + options.filter;
        }
        if (options.sort) {
          if (options.filter) {
            queryString += '&';
          }
          queryString += 's=' + options.sort;
        }
      }

      fetch(queryString)
        .then(function(response) {
          return response.json()
        }).then(function(json) {

          let movies = json.movies;
          if (options.filter) {
            movies = movies.filter((m) => (
              m.title.indexOf(options.filter) >= 0
              || m.director.indexOf(options.filter) >= 0
              || m.country.indexOf(options.filter) >= 0
              || m.year.toString().indexOf(options.filter) >= 0)
            );
          }

          if (options.sort) {
            if (options.sort === 'title') {
              movies = movies.sort((m1, m2) => (m1.title >= m2.title));
            }
            else if (options.sort === 'year') {
              movies = movies.sort((m1, m2) => (m1.year >= m2.year));
            }
          }

          callback(movies);
        }).catch(function(ex) {
          console.log('parsing failed', ex)
          callback({});
        });
    },

    getMovie: function(movieId, callback) {
      this.getMovies({}, function(movies) {
        let movie = movies.filter((m)=>(m.id === movieId));
        if (movie.length === 1) {
          callback(movie[0]);
        }
        // TODO handle unknown movie ID
      });
    }
};

export default DataProvider;