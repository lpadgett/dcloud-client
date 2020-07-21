<template>
    <v-row id="filepath-row">
        <v-col :cols="8">
            <FilepathBar :folderHistory="getFolderHistory"/>
        </v-col>
        <v-col :cols="4">
            <v-row id="option-buttons">
                <OptionButtons/>
            </v-row>
        </v-col>
    </v-row>
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
    #option-buttons {
        padding-right: 10%;
        justify-content: flex-end;
    }
</style>
