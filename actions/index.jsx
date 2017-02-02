import * as consts from '../constants';

export function waitLibraries() {
    return {
        type: consts.WAIT_LIBRARIES
    };
}

export function librariesReceived(libraries) {
    return {
        type: consts.LIBRARIES_RECEIVED,
        libraries
    };
}

export function searchLibraries(libraries, searchTerm) {
    return {
        type: consts.SEARCH_LIBRARIES,
        libraries,
        searchTerm
    };
}

export function waitLibrary() {
    return {
        type: consts.WAIT_LIBRARY
    };
}

export function libraryReceived(library) {
    return {
        type: consts.LIBRARY_RECEIVED,
        library
    };
}

export function waitComputers() {
    return {
        type: consts.WAIT_COMPUTERS
    };
}

export function allComputersReceived(computers) {
    return {
        type: consts.ALL_COMPUTERS_RECEIVED,
        computers
    };
}

export function libComputersReceived(computers, libname) {
    return {
        type: consts.LIB_COMPUTERS_RECEIVED,
        computers,
        libname
    };
}

export function addNewLibrary(library) {
    return {
        type: consts.ADD_NEW_LIBRARY,
        library
    };
}