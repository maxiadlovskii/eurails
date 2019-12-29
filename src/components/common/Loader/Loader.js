import React from 'react'
import styles from './Loader.module.scss'
import { ImageSkeleton, ListLoader, LineSkeleton }from './Skeletons'
import { skeletons } from '../../../constants'
import { additionsClasses } from '../../../utils'
import classNames from 'classnames'

const SkeletonComponents = {
    [skeletons.IMAGE]: ImageSkeleton,
    [skeletons.CONTACT_LIST]: ListLoader,
    [skeletons.LINE]: LineSkeleton
};


export const Loader = ({ type }) => {
    const Component = type && SkeletonComponents[type];
    return <span className={
        classNames(styles['wrapper'], additionsClasses([type], styles))
    }
    >{Component ? <Component/> : 'Loading...'}</span> };