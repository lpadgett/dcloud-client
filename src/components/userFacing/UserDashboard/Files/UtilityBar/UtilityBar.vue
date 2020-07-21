<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title id="MyFiles">My Files / </v-list-item-title>
        </v-list-item-content>
        <FilepathBar :folderHistory="getFolderHistory"/>
        <v-spacer/>
        <OptionButtons/>
    </v-list-item>
</template>

<script>
import { mapGetters } from "vuex";
import OptionButtons from '../Labels/OptionButtons.vue';
import FilepathBar from "./FilepathBar";

    export default {
        name: "TitleItem",
        components: {
            FilepathBar,
            OptionButtons
        },
        computed: {
            ...mapGetters([
                "getFolderHistory",
            ]),
        },
    }
</script>

<style scoped>
    .v-list-item-title MyFiles {
        font-size: large;
    }
</style>
