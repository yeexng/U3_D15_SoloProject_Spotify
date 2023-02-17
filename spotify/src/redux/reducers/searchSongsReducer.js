import { GET_SONGS } from "../actions";

const initialState = {
  searchResult: [],
};

const searchSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        searchResult: action.payload,
      };

    default:
      return state;
  }
};

export default searchSongsReducer;
