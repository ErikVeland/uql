import * as actions from '../../actions';
import * as consts from '../../constants';
import reducer from '../../reducers/computers';

const initialState = [];

describe('library reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it(`should handle ${consts.WAIT_COMPUTERS}`, () => {
        expect(reducer(initialState, actions.waitComputers())).toEqual([])
    })

    it(`should handle ${consts.ALL_COMPUTERS_RECEIVED}`, () => {
        let computers = [{ library: "libraryName" }];
        expect(reducer(initialState, actions.allComputersReceived(computers))).toEqual(computers)
    })

    it(`should handle ${consts.LIB_COMPUTERS_RECEIVED} with result`, () => {
        let computers = [{ library: "libraryName" }, { library: "anotherLibraryName" }, { library: "tomatchName" }];
        let libname = "tomatchName";

        expect(reducer(initialState, actions.libComputersReceived(computers, libname))).toEqual([{ library: "tomatchName" }])
    })

    it(`should handle ${consts.LIB_COMPUTERS_RECEIVED} without result`, () => {
        let computers = [{ library: "libraryName" }, { library: "anotherLibraryName" }, { library: "tomatchName" }];
        let libname = "mismatchname";

        expect(reducer(initialState, actions.libComputersReceived(computers, libname))).toEqual([])
    })
})