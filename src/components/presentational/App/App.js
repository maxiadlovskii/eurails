import React from 'react';
import styles from './App.module.scss'
import {LinksBar} from "../LinksBar/LinksBar";

export const App = ({ children, links }) => <section className={styles.App}>
    <LinksBar list={links}/>
    <section className={styles.content}>{children}</section>
</section>;