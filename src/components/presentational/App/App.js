import React from 'react';
import styles from './App.module.scss'
import {LinksBar} from "../LinksBar/LinksBar";

export const App = ({ children, links, isFetching }) => <section className={styles.App}>
    <LinksBar isFetching={isFetching} list={links}/>
    <section className={styles.content}>{children}</section>
</section>;