const initialState = {
message: '',
isFetching: false,
error: ''
};

export const quoteReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            case 'FETCH_QUOTE_START':
            return {
                ...state,
                isFetching: true
    };
    case 'FETCH_QUOTE_SUCCESS':
    return {
    ...state,
    isFetching: false,
    message: action.payload,
    error: ''
    };
  return state;
}
};