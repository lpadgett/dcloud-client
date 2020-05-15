<template>
    <v-list>
        <v-list-item
                v-for="file in files"
                :key="file.name"
                link
        >
            <v-list-item-icon>
                <v-icon v-if="file.type === 'directory'">{{ 'mdi-folder' }}</v-icon>
                <v-icon v-else-if="file.type === 'archive'">{{ 'mdi-zip-box' }}</v-icon>
                <v-icon v-else>{{ 'mdi-file' }}</v-icon>
            </v-list-item-icon>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    data () {
        return {
            files: [
                {name: 'test1', type: 'file', size: '_kb', lastModified: 'date'},
                {name: 'test2', type: 'directory', size: '_kb', lastModified: 'date'},
                {name: 'test3', type: 'file', size: '_kb', lastModified: 'date'},
                {name: 'test3', type: 'archive', size: '_kb', lastModified: 'date'}
            ],
        }
    }
}
</script>
