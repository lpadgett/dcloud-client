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
                <File :files="folders"/>
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
    data () {
        return {
            folders: [
                {name: 'testFolder1', type: 'folder', size: '-', lastModified: 'date'},
                {name: 'testFolder2', type: 'folder', size: '-', lastModified: 'date'},
            ],
            files: [
                {name: 'test1', type: 'picture', size: '1kb', lastModified: 'date1', source: 'https://siasky.net/CAATt9wrsMQ47g-18XZYhXTwIVoFNlz9j8iKnIeJg2kXhA'},
                {name: 'test2', type: 'other', size: '1mb', lastModified: 'date2', source: 'https://siasky.net/EACXV8iHR_k5m9bIlNP1MbQzNzJoNLnIJpdgNxKt7P1_ig'},
                {name: 'test3', type: 'archive', size: '1gb', lastModified: 'date3', source: 'https://siasky.net/CADdUqC4NLdlS79eyjk5DDINntKWm3B1cRjKPTnXszldLw'},
            ],
        }
    }
}
</script>
