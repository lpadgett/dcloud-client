<template> <!-- Divider should be a slash, like in a filepath -->
    <v-breadcrumbs :items="folderHistory" divider="/">
        <v-breadcrumbs-item
                v-for="directory in filePathStack"
                :key="directory"
        />
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
