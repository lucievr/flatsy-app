import { FETCH_FLATS_START, FETCH_FLATS_SUCCESS, FETCH_FLATS_FAILURE } from '../actions/flats';

const INITIAL_STATE = {
  flats: [],
  isFetching: false,
  errorMessage: undefined
};

const flatsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FLATS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_FLATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        flats: action.payload
      };
    case FETCH_FLATS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default flatsReducer;
