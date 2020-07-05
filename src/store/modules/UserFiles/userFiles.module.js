const state = {
    userFiles: [
        {
            parent: null,
            id: "1a",
            name: "testFolder1",
            type: "folder",
            size: "-",
            source: null,
            lastModified: "date1",
            favorite: true,
            trashed: false,
            children: [
                {
                    parent: "1a",
                    id: "1b",
                    name: "test1",
                    type: "picture",
                    size: "1kb",
                    source: "https://siasky.net/CAATt9wrsMQ47g-18XZYhXTwIVoFNlz9j8iKnIeJg2kXhA",
                    lastModified: "date2",
                    favorite: false,
                    trashed: false,
                    children: null
                },
                {
                    parent: "1a",
                    id: "1c",
                    name: "Doesnt Exist Yet",
                    type: "picture",
                    size: "1kb",
                    source: null,
                    lastModified: "date3",
                    favorite: false,
                    trashed: false,
                    children: null
                }
            ]
        },
        {
            parent: null,
            id: "2a",
            name: "testFolder2",
            type: "folder",
            size: "-",
            source: null,
            lastModified: "date4",
            favorite: false,
            trashed: false,
            children: [
                {
                    parent: "2a",
                    id: "2b",
                    name: "test1",
                    type: "picture",
                    size: "1kb",
                    source: "https://siasky.net/EACXV8iHR_k5m9bIlNP1MbQzNzJoNLnIJpdgNxKt7P1_ig",
                    lastModified: "date5",
                    favorite: false,
                    trashed: false,
                    children: null
                },
                {
                    parent: "2a",
                    id: "2c",
                    name: "This doesnt exist yet either",
                    type: "picture",
                    size: "1kb",
                    source: null,
                    lastModified: "date6",
                    favorite: false,
                    trashed: false,
                    children: null
                }
            ]
        },
        {
            parent: null,
            id: "1c",
            name: "testFolder3",
            type: "folder",
            size: "-",
            source: null,
            lastModified: "date7",
            favorite: true,
            trashed: false,
            children: []
        },
        {
            parent: null,
            id: "2b",
            name: "test1",
            type: "picture",
            size: "1kb",
            source: "https://siasky.net/CADdUqC4NLdlS79eyjk5DDINntKWm3B1cRjKPTnXszldLw",
            lastModified: "date1",
            favorite: false,
            trashed: false,
            children: null
        },
    ],
    currentFilesBeingViewed: [
        {
            parent: null,
            id: "1a",
            name: "testFolder1",
            type: "folder",
            size: "-",
            source: null,
            lastModified: "date1",
            favorite: true,
            trashed: false,
            children: [
                {
                    parent: "1a",
                    id: "1b",
                    name: "test1",
                    type: "picture",
                    size: "1kb",
                    source: "https://siasky.net/CAATt9wrsMQ47g-18XZYhXTwIVoFNlz9j8iKnIeJg2kXhA",
                    lastModified: "date2",
                    favorite: false,
                    trashed: false,
                    children: null
                },
                {
                    parent: "1a",
                    id: "1c",
                    name: "Doesnt Exist Yet",
                    type: "picture",
                    size: "1kb",
                    source: null,
                    lastModified: "date3",
                    favorite: false,
                    trashed: false,
                    children: null
                }
            ]
        },
        {
            parent: null,
            id: "2a",
            name: "testFolder2",
            type: "folder",
            size: "-",
            source: null,
            lastModified: "date4",
            favorite: false,
            trashed: false,
            children: [
                {
                    parent: "2a",
                    id: "2b",
                    name: "test1",
                    type: "picture",
                    size: "1kb",
                    source: "https://siasky.net/EACXV8iHR_k5m9bIlNP1MbQzNzJoNLnIJpdgNxKt7P1_ig",
                    lastModified: "date5",
                    favorite: false,
                    trashed: false,
                    children: null
                },
                {
                    parent: "2a",
                    id: "2c",
                    name: "This doesnt exist yet either",
                    type: "picture",
                    size: "1kb",
                    source: null,
                    lastModified: "date6",
                    favorite: false,
                    trashed: false,
                    children: null
                }
            ]
        },
        {
            parent: null,
            id: "1c",
            name: "testFolder3",
            type: "folder",
            size: "-",
            source: null,
            lastModified: "date7",
            favorite: true,
            trashed: false,
            children: []
        },
        {
            parent: null,
            id: "2b",
            name: "test1",
            type: "picture",
            size: "1kb",
            source: "https://siasky.net/CADdUqC4NLdlS79eyjk5DDINntKWm3B1cRjKPTnXszldLw",
            lastModified: "date1",
            favorite: false,
            trashed: false,
            children: null
        },
    ],
    filePathStack: [],
    isLoading: false
};

const getters = {
    getCurrentFilesBeingViewed(state) {
        return state.currentFilesBeingViewed;
    },
    getFilePathStack(state) {
        return state.filePathStack;
    },
    isLoading(state) {
        return state.isLoading;
    }
};

const actions = {
    // fetchFiles({commit}) {
    //     //Nothing here yet because no async ops are ready (no backend)
    // },
    // addFiles({commit}, params) {
    //     //Nothing here yet because no async ops are ready (no backend)
    // }
};

const mutations = {
    goToUserFilesRoot(state) {
        state.currentFilesBeingViewed = state.userFiles;
    },
    // startLoading(state) {
    //     state.isLoading = true;
    // },
    // stopLoading(state) {
    //     state.isLoading = false;
    // },
    // addFile(state, file) { //For adding a file
    //
    // },
    // moveFile(state, fileAndDestination) { //For moving a file/folder
    //
    // },
    // deleteFile(state, file) { //For deleting a file/folder
    //
    // },
    // favoriteFile(state, file) { //For favoriting a file/folder
    //
    // },
    // editFileName(state, fileAndNewName) { //For editing the name of a file/folder
    //
    // },
    enterFolder(state, folderName) { //For entering a folder
        if(folderName.type !== 'folder' && folderName.source !== null) {
            window.open(folderName.source, "_blank");
        } else if(folderName.children !== null) {
            state.filePathStack.push(state.files);
            state.files = folderName.children;
            return state.files;
        } else {
            alert("This file is empty!");
        }
    },
    // exitToFolder(state, levelsBack) { //For exiting to a folder
    //
    // }
};

export default {
    state,
    getters,
    actions,
    mutations
}
