import React from 'react'
import classNames from 'classnames'
import styles from './Modal.module.scss'


export const Modal = ({ isVisible, onClose, children }) => {
    const closeModal = () => { onClose() };
    return <div className={classNames(styles.wrapper,
        {[styles.hide]: !isVisible}
        )
    }>
        <span className={styles.close} onClick={closeModal}>X</span>
        {children}
    </div>
};