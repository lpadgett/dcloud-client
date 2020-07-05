<template>
    <div>
        <v-list-item
                v-for="file in files"
                :key="file.name"
                link
                v-on:dblclick="clickFile(file)"
        >
            <v-list-item-icon>
                <v-icon v-if="file.type === 'picture'">{{ 'mdi-image' }}</v-icon>
                <v-icon v-else-if="file.type === 'archive'"> {{ 'mdi-zip-box' }}</v-icon>
                <v-icon v-else-if="file.type === 'folder'">{{ 'mdi-folder' }}</v-icon>
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
    </div>
</template>

<script>
import { mapMutations } from "vuex";

    export default {
        name: "File",
        props: {
            files: {
                type: Array,
                required: true,
            },
        },
        methods: {
            ...mapMutations([
                "enterFolder"
            ])
        },
    }
</script>
