<template> <!-- Divider should be a slash, like in a filepath -->
    <v-breadcrumbs :items="folderHistory" divider="/">
        <v-breadcrumbs-item
                v-for="folder in filePathStack"
                :key="folder.name"
        >
            {{ folder.name }}
        </v-breadcrumbs-item>
    </v-breadcrumbs>
</template>

<script>
export default {
    name: "FilepathBar",
    props: {
        folderHistory: {
            type: Array,
            required: true,
        }
    },
}
</script>
