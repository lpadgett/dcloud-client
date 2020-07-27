<template> <!-- Divider should be a slash, like in a filepath. Use row of chips instead of v-breadcrumbs in order for js execution ability -->
    <v-row>
        <v-chip id="root-folder" outlined="true" @click="goToUserFilesRoot">
            {{ getFolderHistoryRoot.folderName }}
        </v-chip>
        <ul>
            <li v-for="folder in getFolderHistoryPostRoot" :key="folder.folderName">
                <v-chip outlined="true" @click="goBackToFolder(folder)">
                    {{ folder.folderName }}
                </v-chip>
            </li>
        </ul>
    </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
    name: "FilepathBar",
    computed: {
        ...mapGetters([
            "getFolderHistoryRoot",
            "getFolderHistoryPostRoot"
        ])
    },
    methods: {
        ...mapMutations([
            "goToUserFilesRoot",
            "goBackToFolder"
        ])
    },
}
</script>

<style scoped>
    li::before {
        content: " / ";
        padding-right: 3px;
    }

    ul, li {
        padding-left: 3px;
        display: inline;
    }
</style>
