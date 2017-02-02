import * as actions from '../../actions';
import * as consts from '../../constants';
import reducer from '../../reducers/libraries';

const initialState = { libraries: [], bgCaption: null };

describe('libraries reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it(`should handle ${consts.WAIT_LIBRARIES}`, () => {
        let waitLibrariesState = {
            libraries: [],
            bgCaption: "Loading libraries..."
        };
        expect(reducer(initialState, actions.waitLibraries())).toEqual(waitLibrariesState)
    })

    it(`should handle ${consts.LIBRARIES_RECEIVED}`, () => {
        let libraries = [{ name: "library" }, { name: "another" }];

        expect(reducer(initialState, actions.librariesReceived(libraries))).toEqual({
            libraries,
            bgCaption: null
        })
    })

    it(`should handle ${consts.SEARCH_LIBRARIES} with result`, () => {
        let libraries = [{ name: "library" }, { name: "another" }];
        let searchTerm = "another";

        expect(reducer(initialState, actions.searchLibraries(libraries, searchTerm))).toEqual({
            libraries: [{ name: "another" }],
            bgCaption: null
        })
    })

    it(`should handle ${consts.SEARCH_LIBRARIES} without results`, () => {
        let libraries = [{ name: "library" }, { name: "another" }];
        let searchTerm = "something not match";

        expect(reducer(initialState, actions.searchLibraries(libraries, searchTerm))).toEqual({
            libraries: [],
            bgCaption: "No libraries found"
        })
    })
})