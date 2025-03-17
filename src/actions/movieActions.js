import actionTypes from '../constants/actionTypes';
// You can also use process.env directly, no need for a separate runtimeEnv
const env = process.env;

function moviesFetched(movies) {
  return {
    type: actionTypes.FETCH_MOVIES,
    movies: movies,
  };
}

function movieFetched(movie) {
  return {
    type: actionTypes.FETCH_MOVIE,
    selectedMovie: movie,
  };
}

function movieSet(movie) {
  return {
    type: actionTypes.SET_MOVIE,
    selectedMovie: movie,
  };
}

export function setMovie(movie) {
  return (dispatch) => {
    dispatch(movieSet(movie));
  };
}

export function fetchMovie(movieId) {
  return (dispatch) => {
    return fetch(`${env.REACT_APP_API_URL}/movies/${movieId}?reviews=true`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      mode: 'cors',
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((res) => {
        // If the API returns an object with a property 'data', use that
        const movie = res && res.data ? res.data : res;
        dispatch(movieFetched(movie));
      })
      .catch((e) => console.log(e));
  };
}

export function fetchMovies() {
  return (dispatch) => {
    return fetch(`${env.REACT_APP_API_URL}/movies?reviews=true`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      mode: 'cors',
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((res) => {
        // Check if res is an array; if not, try to use res.data
        const moviesArray = Array.isArray(res) ? res : res.data;
        dispatch(moviesFetched(moviesArray));
      })
      .catch((e) => console.log(e));
  };
}
