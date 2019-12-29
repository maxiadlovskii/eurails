import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {ContactList} from "../presentational/ContactList/ContactList";
import {useRouter} from "../../hooks";
import { linkParams } from '.././../constants/routerLinks'
import { mapContact } from '../../utils'

const  ContactListContainer= ({ collection }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const {
        match: {
        params: { [linkParams.LETTER]: letter }
    }} = useRouter();
    const closeModal = () => {
        isModalVisible && setIsModalVisible(false);
        setSelectedContact(null)
    };
    const openModal = () => {
        !isModalVisible && setIsModalVisible(true);
    };
    useEffect(closeModal, [letter]);
    const onItemClick = path => {
        openModal();
        setSelectedContact(mapContact(collection.get(letter)[path]));
    };
    return <ContactList
        isModalVisible={isModalVisible}
        onModalClose={closeModal}
        list={collection.get(letter)}
        onItemClick={onItemClick}
        selectedContact={selectedContact}
    />
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