import React from 'react'
import styles from './Avatar.module.scss'
import {Image} from "../Image/Image";

export const Avatar = ({ picture }) => <div className={styles.wrapper}><Image src={picture}/></div>