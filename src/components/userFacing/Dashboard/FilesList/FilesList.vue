<template>
    <v-list>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    My Files
                </v-list-item-title>
                <v-list-item-subtitle>
                    Name
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
                <v-list-item-title class="title">
                    <br/>
                </v-list-item-title>
                <v-list-item-subtitle>
                    Size
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
                <v-list-item-title class="title">
                    <br/>
                </v-list-item-title>
                <v-list-item-subtitle>
                    Last Modified
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <File :files="folders"/>
        <File :files="files"/>
    </v-list>
</template>

<script>
import File from "./File";

export default {
    components: {File},
    data () {
        return {
            folders: [
                {name: 'testFolder1', type: 'folder', size: '-', lastModified: 'date'},
                {name: 'testFolder2', type: 'folder', size: '-', lastModified: 'date'},
            ],
            files: [
                {name: 'test1', type: 'picture', size: '1kb', lastModified: 'date1'},
                {name: 'test2', type: 'other', size: '1mb', lastModified: 'date2'},
                {name: 'test3', type: 'archive', size: '1gb', lastModified: 'date3'},
            ],
        }
    }
}
</script>
