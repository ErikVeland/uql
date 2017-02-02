import * as consts from '../constants';

const LibraryReducer = (state = {}, action) => {
    switch (action.type) {
        case consts.WAIT_LIBRARY:
            return {};
        case consts.LIBRARY_RECEIVED:
        case consts.ADD_NEW_LIBRARY:
            return Object.assign({}, action.library);
        default:
            return state
    }
}

export default LibraryReducer;