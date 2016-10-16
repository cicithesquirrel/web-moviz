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
          queryString += 's=' + options.sort;
        }
      }

      fetch(queryString)
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          callback(json.movies);
        }).catch(function(ex) {
          console.log('parsing failed', ex)
          callback({});
        });
    } 
};

export default DataProvider;