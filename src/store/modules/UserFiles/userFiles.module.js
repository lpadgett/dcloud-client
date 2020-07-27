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
                },
                {
                    parent: "1a",
                    id: "1d",
                    name: "secondLayerForFileNavbarTest",
                    type: "folder",
                    side: "-",
                    source: null,
                    lastModified: "date test",
                    favorite: false,
                    trashed: false,
                    children: [
                        {
                            parent: "1a",
                            id: "1e",
                            name: "thirdLayerForFileNavbarTest",
                            type: "folder",
                            size: "-",
                            source: null,
                            lastModified: "date test1",
                            favorite: false,
                            trashed: false,
                            children: []
                        }
                    ]
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
                    name: "test2",
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
            name: "test3",
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
                },
                {
                    parent: "1a",
                    id: "1d",
                    name: "secondLayerForFileNavbarTest",
                    type: "folder",
                    side: "-",
                    source: null,
                    lastModified: "date test",
                    favorite: false,
                    trashed: false,
                    children: [
                        {
                            parent: "1a",
                            id: "1e",
                            name: "thirdLayerForFileNavbarTest",
                            type: "folder",
                            size: "-",
                            source: null,
                            lastModified: "date test1",
                            favorite: false,
                            trashed: false,
                            children: []
                        }
                    ]
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
                    name: "test2",
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
            name: "test3",
            type: "picture",
            size: "1kb",
            source: "https://siasky.net/CADdUqC4NLdlS79eyjk5DDINntKWm3B1cRjKPTnXszldLw",
            lastModified: "date1",
            favorite: false,
            trashed: false,
            children: null
        },
    ],
    folderHistoryRoot: {
            folderName: "My DCloud", //Root element
            directoryContents: [
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
                        },
                        {
                            parent: "1a",
                            id: "1d",
                            name: "secondLayerForFileNavbarTest",
                            type: "folder",
                            side: "-",
                            source: null,
                            lastModified: "date test",
                            favorite: false,
                            trashed: false,
                            children: [
                                {
                                    parent: "1a",
                                    id: "1e",
                                    name: "thirdLayerForFileNavbarTest",
                                    type: "folder",
                                    size: "-",
                                    source: null,
                                    lastModified: "date test1",
                                    favorite: false,
                                    trashed: false,
                                    children: []
                                }
                            ]
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
                            name: "test2",
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
                    name: "test3",
                    type: "picture",
                    size: "1kb",
                    source: "https://siasky.net/CADdUqC4NLdlS79eyjk5DDINntKWm3B1cRjKPTnXszldLw",
                    lastModified: "date1",
                    favorite: false,
                    trashed: false,
                    children: null
                },
            ]
        },
    folderHistoryPostRoot: [],
    isLoading: false
};

const getters = {
    getCurrentFilesBeingViewed(state) {
        return state.currentFilesBeingViewed;
    },
    getFilePathStack(state) {
        return state.filepathStack;
    },
    getFolderHistoryRoot(state) {
        return state.folderHistoryRoot;
    },
    getFolderHistoryPostRoot(state) {
        return state.folderHistoryPostRoot;
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
        state.folderHistoryPostRoot = [];
    },
    clickFile(state, file) { //For entering a folder or opening a non-folder file
        if(file.type !== 'folder' && file.source !== null) {
            window.open(file.source, "_blank");
        } else if(file.children !== null) {
            state.folderHistoryPostRoot.push(
                {
                    folderName: file.name,
                    directoryContents: file.children
                }
            )
            state.currentFilesBeingViewed = file.children;
        } else {
            alert("This file is empty (see line 259 in userFiles.module.js to change this text)!");
        }
    },
    goBackToFolder(state, folder) {
        let equal = require("deep-equal") //Use deep-equal because json.stringify could return false negatives
        //TODO: Operate on a temporary variable instead of the state variable itself so you don't accidentally screw up the state if there is a bug?
        //TODO: account for edge case where desired folder doesn't exist in folder history?
        for (let i = state.folderHistoryPostRoot.length - 1; i > -1; i--) { //Adjust file path bar according to what folder you go back to
            if (equal(state.folderHistoryPostRoot[i], folder)) {
                state.currentFilesBeingViewed = folder.directoryContents;
                break;
            } else {
                state.folderHistoryPostRoot.pop();
            }
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
