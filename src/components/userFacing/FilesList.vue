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
            <v-col>
                <v-list-item-title class="title">
                    <br/>
                </v-list-item-title>
                <v-list-item-subtitle>
                    Size
                </v-list-item-subtitle>
            </v-col>
            <v-col>
                <v-list-item-title class="title">
                    <br/>
                </v-list-item-title>
                <v-list-item-subtitle>
                    Last Modified
                </v-list-item-subtitle>
            </v-col>
        </v-list-item>
        <v-list-item
                v-for="folder in folders"
                :key="folder.name"
                link
        >
            <v-list-item-icon>
                <v-icon>{{ 'mdi-folder' }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                {{ folder.name }}
            </v-list-item-content>
            <v-list-item-content>
                -
            </v-list-item-content>
            <v-list-item-content>
                {{ folder.lastModified }}
            </v-list-item-content>
        </v-list-item>
        <v-list-item
                v-for="file in files"
                :key="file.name"
                link
        >
            <v-list-item-icon>
                <v-icon v-if="file.type === 'picture'">{{ 'mdi-image' }}</v-icon>
                <v-icon v-else-if="file.type === 'archive'"> {{ 'mdi-zip-box' }}</v-icon>
                <v-icon v-else> {{ 'mdi-file' }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                {{ file.name}}
            </v-list-item-content>
            <v-list-item-content>
                {{ file.size}}
            </v-list-item-content>
            <v-list-item-content>
                {{ file.lastModified }}
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    data () {
        return {
            folders: [
                {name: 'testFolder1', type: 'folder', size: '-', lastModified: 'date'},
                {name: 'testFolder2', type: 'folder', size: '-', lastModified: 'date'},
            ],
            files: [
                {name: 'test1', type: 'picture', size: '_kb', lastModified: 'date'},
                {name: 'test3', type: 'other', size: '_kb', lastModified: 'date'},
                {name: 'test3', type: 'archive', size: '_kb', lastModified: 'date'},
            ],
        }
    }
}
</script>
