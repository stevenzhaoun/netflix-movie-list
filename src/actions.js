import { loadMyList, loadRecommendations } from "./service";

export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const SET_MOVIE_DATA = "SET_MOVIE_DATA";
export const START_LOADING = "START_LOADING";

export const startLoadingAction = () => {
  return {
    type: START_LOADING,
  }
}

export const addMovieAction = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie
  }
}

export const removeMovieAction = (id) => {
  return {
    type: REMOVE_MOVIE,
    payload: id
  }
}

export const setMovieDataAction = (myList, recommendations) => {
  return {
    type: SET_MOVIE_DATA,
    payload: {
      myList,
      recommendations
    }
  }
}


export const loadMovieDataAction = () => {
  return (dispatch) => {
    dispatch(startLoadingAction())
    return Promise.all([
      loadMyList(),
      loadRecommendations()
    ]).then(([myList, recommendations]) => {
      dispatch(setMovieDataAction(myList, recommendations))
    })
  }
}