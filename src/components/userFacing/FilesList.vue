<template>
    <v-list>
        <v-list-item
                v-for="file in files"
                :key="file.name"
        >
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
                {name: 'test3', type: 'file', size: '_kb', lastModified: 'date'}
            ],
        }
    }
}
</script>
