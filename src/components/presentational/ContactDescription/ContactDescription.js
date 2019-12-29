import React from 'react'
import styles from './ContactDescription.module.scss'
import {Avatar} from "../../common/Avatar/Avatar";
import classNames from 'classnames';

const AdditionItem = ({ name, value }) => <li
    key={`${name}_${value}`}
    className={classNames(styles.additionItem, styles[name])}
>
        <span className={styles.name}>{name}: </span>
        <span className={styles.value}>{value}</span>
    </li>

export const ContactDescription = ({ contact:
    { lastName, firstName, picture, userName, additionInfo } }) => {
    return (
        <div className={styles.wrapper}>
                <Avatar picture={picture}/>
            <div className={styles.infoBlock}>
                <h3 className={styles.header}>
                    <span className={styles.lastName}>{lastName}</span>, <span>{firstName}</span>
                </h3>
                <ul className={styles.additionInfo}>
                    {additionInfo.map(({ name, value }) => (
                        <AdditionItem key={`${name}_${value}`} name={name} value={value}/>
                    ))
                    }
                </ul>
            </div>
                <AdditionItem name="userName" value={userName}/>
            </div>
    );
};