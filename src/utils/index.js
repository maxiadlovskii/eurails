import { links as routerLinks } from '../constants/routerLinks'
import {letters} from "../constants";
import {contactsModel} from "../constants/apiModels";

export const getLinks = mapCollection => {
    const links = [];
    for (let letterCollection of mapCollection) {
        const [ letter, collection ] = letterCollection;
        links.push({
            link: `${routerLinks.LIST}/${letter}`,
            disabled: !collection || !collection.length,
            name: letter,
            additionInfo: !collection ? '' : `(${collection.length})`
        })
    }
    return links
};

export const getDefaultCollection = () => letters.reduce((map, letter) => {
        map.set(letter, []);
        return map
    }, new Map([]));

export const normalizeArrayByFirstLetter = data => {
    const collection = getDefaultCollection();
    data.forEach( contact => {
        const firstLetter = contact[contactsModel.NAME][contactsModel.NAME_LAST][0].toLowerCase();
        if(collection.has(firstLetter)){
            collection.get(firstLetter).push(contact)
        } else { collection.set(firstLetter, [contact])}
    });
    return collection;
};

export const isObject = val => {
    if (val === null) {
        return false
    }
    return typeof val === 'function' || typeof val === 'object'
};

export const additionsClasses = (additions = [], style) =>
    additions.reduce((res, addition) => {
        if (isObject(addition)) {
            const classes = Object.entries(addition).reduce((res, [key, val]) => (val ? [...res, style[key]] : res), [])
            return [...res, ...classes]
        }
        return [...res, style[addition]]
    }, []);

export const mapContact = ({
    [contactsModel.PICTURE]: { [contactsModel.PICTURE_MEDIUM]: picture },
    [contactsModel.NAME]: { [contactsModel.NAME_FIRST]: firstName },
    [contactsModel.NAME]: { [contactsModel.NAME_LAST]: lastName },
                               [contactsModel.LOGIN]: { [contactsModel.LOGIN_USERNAME]: userName},
                               [contactsModel.EMAIL]: email,
                               [contactsModel.PHONE]: phone,
                               [contactsModel.LOCATION]: { [contactsModel.LOCATION_STREET]: street },
                               [contactsModel.LOCATION]: { [contactsModel.LOCATION_CITY]: city },
                               [contactsModel.LOCATION]: { [contactsModel.LOCATION_STATE]: state },
                               [contactsModel.LOCATION]: { [contactsModel.LOCATION_POSTCODE]: postcode },
                           }) => ({
    firstName, lastName, picture, userName,
    additionInfo: [
        {
            name: "e-mail",
            value: email
        },
        {
            name: "phone",
            value: phone
        },
        {
            name: "street",
            value: `${street[contactsModel.STREET_NUMBER]}, ${street[contactsModel.STREET_NAME]}`
        },
        {
            name: "city",
            value: city
        },
        {
            name: "state",
            value: state
        },
        {
            name: "postcode",
            value: postcode
        }]
});