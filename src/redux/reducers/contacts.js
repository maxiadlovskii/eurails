import { SUCCESS, REQUEST, FAILED } from '../../constants/actions';
import { letters } from '../../constants'

const initState = {
    collection: letters.reduce((map, letter) => {
        map.set(letter, []);
        return map
    }, new Map([])),
    isFailed: false,
    isSucceed: false,
    isFetching: false
};

export default (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        default:
            return state
    }
}