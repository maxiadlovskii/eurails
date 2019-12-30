import React from 'react'
import styles from './ContactListItem.module.scss'

export const ContactListItem = ({ firstName, lastName, path, onClick }) => <div
    className={styles.wrapper}
    onClick={() => onClick(path)}
><span className={styles.name}>{firstName}, {lastName}</span></div>;