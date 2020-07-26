<template> <!-- Divider should be a slash, like in a filepath -->
    <v-breadcrumbs :items="folderHistory" divider="/">
        <v-breadcrumbs-item
                v-for="directory in filePathStack"
                :key="directory"
                v-on:click="goBackToFolder(directory)"
        />
    </v-breadcrumbs>
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
