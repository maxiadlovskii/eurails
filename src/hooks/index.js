import React, { useState, useEffect, useContext } from 'react'
import { __RouterContext } from 'react-router-dom'

export const useRouter = () => useContext(__RouterContext);

export const useImageLoader = path => {
    const [isLoaded, setIsLoaded] = useState(false);
    const loadImage = () => {
        const image = new Image();
        image.onload = () => {
            setIsLoaded(true)
        };
        image.src = path
    };
    useEffect(loadImage, []);
    return [isLoaded]
};