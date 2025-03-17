import constants from '../constants/actionTypes';

const initialState = {
  movies: [],
  selectedMovie: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_MOVIES:
      return {
        ...state,
        movies: action.movies,
        selectedMovie: action.movies.length > 0 ? action.movies[0] : null,
      };
    case constants.SET_MOVIE:
      return {
        ...state,
        selectedMovie: action.selectedMovie,
      };
    case constants.FETCH_MOVIE:
      return {
        ...state,
        selectedMovie: action.selectedMovie,
      };
    default:
      return state;
  }
};

export default movieReducer;
