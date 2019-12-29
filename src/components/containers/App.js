import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { App } from "../presentational/App/App";
import {getLinks} from "../../utils";


const AppContainer = ({ children, collection, isFailed, isFetching, isSucceed }) => {
    useEffect(()=> console.log('CDM APP'), []);
    console.log('AppContainer');
    return <App links={getLinks(collection)}>{children}</App>
}

const mapStateToProps = ({contacts: { collection, isFailed, isFetching, isSucceed }}) => ({
    collection, isFailed, isFetching, isSucceed
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)