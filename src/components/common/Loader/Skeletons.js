import React from 'react'
import styles from './Loader.module.scss'
import classNames from 'classnames'
import { additionsClasses } from '../../../utils'

const Line = ({ addition }) => <div className={classNames(additionsClasses(addition, styles), styles.line)} />;
const Rec = () => <div className={styles.rec} />;
export const ListLoader = () => <>
    <Line addition={['short']} />
    <Line addition={['short']}/>
    <Line addition={['short']}/>
    <Line addition={['short']}/>
    <Line addition={['short']}/>
    <Line addition={['short']}/>
    <Line addition={['short']}/>
</>
export const ImageSkeleton = () => <Rec />;
export const LineSkeleton = () => <Line/>;