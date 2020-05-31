import Vue from 'vue';
//other imports here; you will put them in as you start to use APIs

const state = {
    files: [
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
    getCurrentFiles(state) {
        return state.files;
    },
    getFilePathQueue(state) {
        return state.filePathStack;
    },
    isLoading(state) {
        return state.isLoading;
    }
};

const actions = {
    fetchFiles({ commit }) {
        //Nothing here yet because no async ops are ready (no backend)
    },
    addFiles({ commit }, params) {
        //Nothing here yet because no async ops are ready (no backend)
    }
};

const mutations = {
    startLoading(state) {
        state.isLoading = true;
    },
    stopLoading(state) {
        state.isLoading = false;
    },
    myDcloud(state) {

    },
    addFile(state, file) {

    },
    moveFile(state, fileAndDestination) {

    },
    deleteFile(state, file) {

    },
    favoriteFile(state, file) {

    },
    editFileName(state, fileAndNewName) {

    },
    enterFolder(state, folderName) {

    },
    exitToFolder(state, levelsBack) {

    }
};

