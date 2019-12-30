import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { App } from "../presentational/App/App";
import {getLinks} from "../../utils";
import { getContacts } from '../../redux/actions/contacts'


const AppContainer = ({ children, getContacts, collection, isFailed, isFetching, isSucceed }) => {
    useEffect(() => { getContacts() }, []);
    return <App
        links={getLinks(collection)}
        isFailed={isFailed}
        isFetching={isFetching}
        isSucceed={isSucceed}
    >{children}</App>
}

const mapStateToProps = ({contacts: { collection, isFailed, isFetching, isSucceed }}) => ({
    collection, isFailed, isFetching, isSucceed
});

const mapDispatchToProps = {
    getContacts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)