import { GET_USERS, GET_DETAIL, GET_GENRE, GET_NAME, POST_GAME } from './actions/types';

const initialState = {
  videoGames: [],
  allVideoGames: [],
  genres: [],
  detailVg: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { 
        ...state, 
        videoGames: action.payload,
        allVideoGames: action.payload,
        // users: action.payload
      };

    case GET_DETAIL:
      return {
        ...state,
        detailVg: action.payload
      };

    case POST_GAME:
      return {
        ...state,        
      };

    case GET_NAME:
      return {
        ...state,
        videoGames: action.payload
      };

    case GET_GENRE:
      return {
        ...state,
        genres: action.payload
      };

    default:
      return { ...state };
  }
};

export default rootReducer;