import { MAIN_API } from '../../constants/api'
import { getDefaultActionsModel, actionCreator } from '../../services/redux/actionCreator'
import { GET_CONTACTS } from '../../constants/actions'
import { settings } from "../../settings";

export const getContacts = () =>
    actionCreator(
        {
            url: MAIN_API,
            params: {
                method: 'get',
                query: settings.randomUserQuery
            }
        },
        getDefaultActionsModel(GET_CONTACTS)
    );