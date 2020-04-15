import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchQuote } from '../store/actions/quoteActions';


const AdviseQuote = props => {
    useEffect((props) => {
        props.fetchQuote();
    }, []);
 


    return (
        <div>
            <h1>Advise</h1>
            {props.isFetching && 
            <Loader type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} />}
            {props.quote && <h3>"{props.quote}"</h3>}
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return{
        quote: state.quotes.quote,
        isFetching: state.quotes.isFetching,
        error: state.quotes.error

    };
};

export default connect(
    mapStateToProps,
    {}
)(AdviseQuote); 