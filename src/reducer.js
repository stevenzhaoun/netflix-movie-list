import * as Actions from './actions'
const initialState = {
  myList: [],
  recommendations: [],
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_MOVIE: {
      const movieData = action.payload;
      const { id } = movieData;
      const hasAdded = state.myList.find(movie => movie.id === id);
      if( hasAdded) {
        return state
      } else {
        return {
          ...state,
          myList: [...state.myList, movieData]
        }
      }
    }
    case Actions.REMOVE_MOVIE: {
      const id = action.payload;
      const hasMovie = state.myList.find(movie => movie.id === id);
      if(hasMovie) {
        const newList = state.myList.filter(movie => movie.id !== id);
        return {
          ...state,
          myList: newList
        };
      } else {
        return state;
      }
    }
    case Actions.SET_MOVIE_DATA: {
      return {
        ...action.payload,
        loading: false
      }
    }
    default: 
      return state
  }
}

export default reducer;