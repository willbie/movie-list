import React from 'react';
import axios from 'axios';

let server = ''

var API_KEY = 'https://api.themoviedb.org/3/movie/76341?api_key=12c6472d9741469523fe287019628929'


/*var movieDB = () => {
  // TODO
  .ajax({
    url: 'https://api.themoviedb.org/3/movie/76341?api_key=12c6472d9741469523fe287019628929',
    type: 'GET',
    data: null,
    contentType: 'application/json',
    success: function(data) {
      //callback(data);
      console.log(data);
    },
    error: function(error) {
      console.error('Failed to fetch messages', error);
    }
  });
};*/

var movieDB = (callback) => {
  axios.get('https://api.themoviedb.org/3/movie/76341?api_key=12c6472d9741469523fe287019628929')
  .then(function (response) {
    // handle success
    console.log(response);
    callback(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

export default movieDB