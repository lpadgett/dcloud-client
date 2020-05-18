<template>
    <v-list>
        <TitleItem/>
        <File :files="folders"/>
        <File :files="files"/>
    </v-list>
</template>

<script>
import File from "./File";
import TitleItem from "./TitleItem";

export default {
    components: {TitleItem, File},
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
