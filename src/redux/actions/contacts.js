import { MAIN_API } from '../../constants/api'
import { getDefaultActionsModel, actionCreator } from '../../services/redux/actionCreator'
import { GET_CONTACTS } from '../../constants/actions'

export const getContacts = () =>
    actionCreator(
        {
            url: MAIN_API,
            params: {
                method: 'get',
                query: {
                    results: 1500,
                    nat: 'us'
                }
            }
        },
        getDefaultActionsModel(GET_CONTACTS)
    );