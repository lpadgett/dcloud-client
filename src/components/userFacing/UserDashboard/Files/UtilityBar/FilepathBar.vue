<template> <!-- Divider should be a slash, like in a filepath. Use row of chips instead of v-breadcrumbs in order for js execution ability -->
    <!--<v-breadcrumbs :items="folderHistory" divider="/">
        <v-breadcrumbs-item
                v-for="directory in filePathStack"
                :key="directory"
                v-on:click="goBackToFolder(directory)"
        />
    </v-breadcrumbs>-->
    <v-row id="actionable-breadcrumb-navbar">
        <v-chip v-for="folder in folderHistory" :key="folder.folderName" @click="goBackToFolder(folder)">
                {{ folder.folderName }}
        </v-chip>
    </v-row>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "FilepathBar",
    props: {
        folderHistory: {
            type: Array,
            required: true,
        }
    },
    methods: {
        ...mapMutations([
            "goBackToFolder"
        ])
    }
}
</script>

<style scoped>

</style>
