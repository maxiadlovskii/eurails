import React from 'react'
import {Empty} from "../Empty/Empty";
import styles from './ContactList.module.scss'
import {ContactListItem} from "../ContactListItem/ContactListItem";
import {contactsModel} from "../../../constants/apiModels";
import {Modal} from "../../common/Modal/Modal";
import {ContactDescription} from "../ContactDescription/ContactDescription";

export const ContactList = ({
                                list,
                                onItemClick,
                                isModalVisible,
                                selectedContact,
                                onModalClose,
                                showNext,
                                showPrev,
                                hasContent,
                                onNext,
                                onPrev
}) => hasContent ? <article className={styles.list}>
    {
        list.map( ({
                       [contactsModel.NAME]: {
                           [contactsModel.NAME_LAST]: lastName,
                           [contactsModel.NAME_FIRST]: firstName,
                       }, [contactsModel.ID]: id, [contactsModel.ID]: {
                           [contactsModel.ID_NAME]: idName,
                            [contactsModel.ID_VALUE]: idValue
            } }, index) => <ContactListItem
            key={`${idName}_${idValue}`}
            lastName={lastName}
            firstName={firstName}
            path={index}
            onClick={onItemClick}
        />)
    }
    <Modal isVisible={isModalVisible} onClose={onModalClose}>
        {isModalVisible && selectedContact !== null
        && <ContactDescription
            contact={selectedContact}
            showNext={showNext}
            showPrev={showPrev}
            onNext={onNext}
            onPrev={onPrev}
        />
        }
    </Modal>
</article> : <Empty/>;