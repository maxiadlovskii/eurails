import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './LinksBar.module.scss';
import classNames from 'classnames';
import {Loader} from "../../common/Loader/Loader";
import {skeletons} from "../../../constants";

export const LinksBar = ({ list, isFetching }) => <nav className={styles.list}>
    { isFetching ? <Loader type={skeletons.LINE}/> : list.map( ({name, additionInfo, link, disabled }) => (
        <NavLink
            activeClassName={styles.active}
            className={classNames(styles.link, {[styles.disabled]: !!disabled})}
            to={link}
            key={link}
        >
            <span className={styles.name}>{name}</span>
            <span className={styles.additionInfo}>{additionInfo}</span>
        </NavLink>
    ))}
</nav>;