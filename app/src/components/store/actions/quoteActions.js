export const fetchQuote = () => {
    return dispatch => {
dispatch({ type: 'FETCH_QUOTE_START'})
axios
.get('https://theysaidso.com/api/#qod')
.then(res => console.log(res))
dispatch ({type: 'FETCH_QUOTE_SUCCESS', payload: res.data.quote});
})
.catch(err => console.log(err.response));
    };
};