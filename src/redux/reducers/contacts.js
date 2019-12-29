import { SUCCESS, REQUEST, FAILED, GET_CONTACTS } from '../../constants/actions';
import { contactsModel } from '../../constants/apiModels'
import { getDefaultCollection, normalizeArrayByFirstLetter } from '../../utils'

const initState = {
    collection: getDefaultCollection(),
    isFailed: false,
    isSucceed: false,
    isFetching: false
};

export default (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case `${GET_CONTACTS}${REQUEST}`:
            return {
                ...state,
                    collection: getDefaultCollection(),
                    isFailed: false,
                    isFetching: true,
                    isSucceed: false
            };
        case `${GET_CONTACTS}${SUCCESS}`:
            return {
                ...state,
                collection: normalizeArrayByFirstLetter(payload[contactsModel.RESULTS]),
                isFailed: false,
                isFetching: false,
                isSucceed: true
            };
        case `${GET_CONTACTS}${FAILED}`:
            return {
                ...state,
                collection: getDefaultCollection(),
                isFailed: true,
                isFetching: false,
                isSucceed: false
            };
        default:
            return state
    }
}