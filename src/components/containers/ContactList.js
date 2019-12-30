import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {ContactList} from "../presentational/ContactList/ContactList";
import {useRouter} from "../../hooks";
import { linkParams } from '.././../constants/routerLinks'
import { mapContact } from '../../utils'
import {ContactDescription} from "../presentational/ContactDescription/ContactDescription";

const  ContactListContainer= ({ collection }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [list, setList] = useState([]);
    const {
        match: {
        params: { [linkParams.LETTER]: letter }
    }} = useRouter();
    const closeModal = () => {
        isModalVisible && setIsModalVisible(false);
        setSelectedContact !== null && setSelectedContact(null)
    };
    const openModal = () => {
        !isModalVisible && setIsModalVisible(true);
    };

    useEffect(()=>{
        closeModal();
        setList(collection.get(letter))
    }, [letter]);
    const onNext = () => {
        setSelectedContact(selectedContact + 1)
    };
    const onPrev = () => {
        setSelectedContact(selectedContact - 1)
    };
    const onItemClick = path => {
        openModal();
        path !== selectedContact && setSelectedContact(path);
    };
    const getContactInfo = () => selectedContact !== null && mapContact(collection.get(letter)[selectedContact]);
    return <ContactList
        isModalVisible={isModalVisible}
        onModalClose={closeModal}
        list={list}
        onItemClick={onItemClick}
        selectedContact={getContactInfo()}
        showNext={selectedContact !== list.length - 1}
        showPrev={selectedContact !== 0}
        hasContent={list && !!list.length}
        onNext={onNext}
        onPrev={onPrev}
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