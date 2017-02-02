import * as actions from '../../actions';
import * as consts from '../../constants';

describe('actions', () => {
    it('should create an action to wait for libraries', () => {
        let action = { type: consts.WAIT_LIBRARIES };

        expect(actions.waitLibraries()).toEqual(action);
    })

    it('should create an action to wait for library', () => {
        let action = { type: consts.WAIT_LIBRARY };

        expect(actions.waitLibrary()).toEqual(action);
    })

    it('should create an action to wait for computers', () => {
        let action = { type: consts.WAIT_COMPUTERS };

        expect(actions.waitComputers()).toEqual(action);
    })

    it('should create an action to search in libraries', () => {
        let libraries = [{ name: "first" }, { name: "second" }];
        let searchTerm = "libraryOne";

        let action = {
            libraries,
            searchTerm,
            type: consts.SEARCH_LIBRARIES
        };

        expect(actions.searchLibraries(libraries, searchTerm)).toEqual(action);
    })

    it('should create an action to received libraries', () => {
        let libraries = [{ name: "first" }, { name: "second" }];
        let action = {
            libraries,
            type: consts.LIBRARIES_RECEIVED
        };

        expect(actions.librariesReceived(libraries)).toEqual(action);
    })

    it('should create an action to received library', () => {
        let library = { name: "library" };
        let action = {
            library,
            type: consts.LIBRARY_RECEIVED
        };

        expect(actions.libraryReceived(library)).toEqual(action);
    })

    it('should create an action to received all computers', () => {
        let computers = [{ library: "libraryname" }, { library: "another" }];
        let action = {
            computers,
            type: consts.ALL_COMPUTERS_RECEIVED
        };

        expect(actions.allComputersReceived(computers)).toEqual(action);
    })

    it('should create an action to received computers for library', () => {
        let computers = [{ library: "libraryname" }, { library: "another" }];
        let libname = "libraryName";
        let action = {
            computers,
            libname,
            type: consts.LIB_COMPUTERS_RECEIVED
        };

        expect(actions.libComputersReceived(computers, libname)).toEqual(action);
    })

    it('should create an action to add new library', () => {
        let library = { name: "library" };
        let action = {
            library,
            type: consts.ADD_NEW_LIBRARY
        };

        expect(actions.addNewLibrary(library)).toEqual(action);
    })
})