import React, { useEffect } from 'react'
import {connect} from "react-redux";
import {ContactList} from "../presentational/ContactList/ContactList";

const  ContactListContainer= ({  }) => {
    useEffect(()=> console.log('CDM'), []);
    return <ContactList />
};

const mapStateToProps = ({contacts: { collection, isFailed, isFetching, isSucceed }}) => ({
    collection, isFailed, isFetching, isSucceed
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactListContainer)