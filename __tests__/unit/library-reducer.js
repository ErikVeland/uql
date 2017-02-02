import * as actions from '../../actions';
import * as consts from '../../constants';
import reducer from '../../reducers/library';

const initialState = {};

describe('library reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it(`should handle ${consts.WAIT_LIBRARY}`, () => {
        expect(reducer(initialState, actions.waitLibrary())).toEqual({})
    })

    it(`should handle ${consts.LIBRARY_RECEIVED}`, () => {
        let library = { name: "libraryName" }
        expect(reducer(initialState, actions.libraryReceived(library))).toEqual(library)
    })

    it(`should handle ${consts.ADD_NEW_LIBRARY}`, () => {
        let library = { name: "libraryName" }
        expect(reducer(initialState, actions.addNewLibrary(library))).toEqual(library)
    })
})