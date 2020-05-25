<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title id="MyFiles">My Files</v-list-item-title>
        </v-list-item-content>
        <OptionButtons/>
    </v-list-item>
</template>

<script>
import OptionButtons from '../Labels/OptionButtons.vue';

    export default {
        name: "TitleItem",
        components: {
            OptionButtons
        },
    }
</script>

<style scoped>
    .v-list-item-title MyFiles {
        font-size: large;
    }
</style>
