import * as consts from '../constants';

const ComputersReducer = (state = [], action) => {
    switch (action.type) {
        case consts.WAIT_COMPUTERS:
            return [];
        case consts.ALL_COMPUTERS_RECEIVED:
            return action.computers.slice();
        case consts.LIB_COMPUTERS_RECEIVED:
            return action.computers.filter(comp => comp.library.toLowerCase().indexOf(action.libname.trim().toLowerCase()) !== -1).slice();
        default:
            return state
    }
}

export default ComputersReducer;