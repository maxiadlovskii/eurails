import { links as routerLinks } from '../constants/routerLinks'

export const getLinks = mapCollection => {
    const links = [];
    for (let letterCollection of mapCollection) {
        const [ letter, collection ] = letterCollection;
        links.push({
            link: `${routerLinks.LIST}/${letter}`,
            disabled: !collection || !collection.length,
            name: letter,
            additionInfo: `(${collection ? collection.length : ''})`
        })
    }
    return links
};