import * as consts from '../constants';

const LibrariesReducer = (state = { libraries: [], bgCaption: null }, action) => {
    switch (action.type) {
        case consts.WAIT_LIBRARIES:
            return {
                libraries: [],
                bgCaption: "Loading libraries..."
            };
        case consts.LIBRARIES_RECEIVED:
            return {
                libraries: action.libraries.slice(),
                bgCaption: null
            };
        case consts.SEARCH_LIBRARIES:
            let libs = action.libraries.filter(lib => lib.name.toLowerCase().indexOf(action.searchTerm.trim().toLowerCase()) !== -1).slice();
            return {
                libraries: libs,
                bgCaption: libs.length ? null : "No libraries found"
            };
        default:
            return state
    }
}

export default LibrariesReducer;