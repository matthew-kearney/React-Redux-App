import axios from "axios";

export const fetchQuote = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_QUOTE_START' });
        axios
            .get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
            .then(res => {
                console.log("API SUCCESSFUL", res.data.message);
                dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: res.data.message });
            })
            .catch(err => console.log(err.response));
    };
};
 export const updateTitle = newTitle => {
     return{};
 };
