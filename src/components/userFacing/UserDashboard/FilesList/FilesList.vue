<template>
    <div>
        <Title/>
        <v-divider/>
        <v-list>
            <LabelItem/>
            <v-divider/>
            <v-list-item-group
                    color="secondary"
                    max="1"
            >
                <File :files="files"/>
            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
import File from "./File";
import Title from "../Labels/Title";
import LabelItem from "../Labels/LabelItem";

export default {
    components: {
        Title,
        LabelItem,
        File
    },
    methods: {
        clickFile: function(file) {
            if(file.type !== 'folder') {
                window.open(file.source, "_blank");
            }
        }
    },
    data () {
        return {
            files: [
                {
                    parent: null,
                    id: "1a",
                    name: "testFolder1",
                    type: "folder",
                    size: "-",
                    source: null,
                    lastModified: "date",
                    favorite: true,
                    children: [
                        {
                            parent: "1a",
                            id: "1b",
                            name: "test1",
                            type: "picture",
                            size: "1kb",
                            source: "https://siasky.net/CAATt9wrsMQ47g-18XZYhXTwIVoFNlz9j8iKnIeJg2kXhA",
                            lastModified: "date",
                            favorite: false,
                            children: null
                        },
                        {
                            parent: "1a",
                            id: "1c",
                            name: "Doesnt Exist Yet",
                            type: "picture",
                            size: "1kb",
                            source: null,
                            lastModified: "date",
                            favorite: false,
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
                    lastModified: "date",
                    favorite: false,
                    children: [
                        {
                            parent: "2a",
                            id: "2b",
                            name: "test1",
                            type: "picture",
                            size: "1kb",
                            source: "https://siasky.net/EACXV8iHR_k5m9bIlNP1MbQzNzJoNLnIJpdgNxKt7P1_ig",
                            lastModified: "date",
                            favorite: false,
                            children: null
                        },
                        {
                            parent: "2a",
                            id: "2c",
                            name: "This doesnt exist yet either",
                            type: "picture",
                            size: "1kb",
                            source: null,
                            lastModified: "date",
                            favorite: false,
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
                    lastModified: "date",
                    favorite: true,
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
                    children: null
                },
            ]
        }
    }
}
</script>
