import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchQuote } from '../store/actions/quoteActions';


const AdviseQuote = props => {
    useEffect(() => {
        props.fetchQuote();
    }, []);
 


    return (
        <div>
            <h1>Quote Of The Day</h1>
            {props.isFetching && 
            <Loader type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} />}
            {props.message && <h3>"{props.message}"</h3>}
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return{
        message: state.quotes.message,
        isFetching: state.quotes.isFetching,
        error: state.quotes.error

    };
};

export default connect(
    mapStateToProps,
    { fetchQuote }
)(AdviseQuote); 