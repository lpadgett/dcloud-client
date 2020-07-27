<template>
    <v-row id="filepath-row">
        <v-col :cols="9">
            <FilepathBar id="filepath-bar" :folderHistory="getFolderHistoryPostRoot"/>
        </v-col>
        <v-col :cols="3">
            <v-row id="option-buttons-row">
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
                "getFolderHistoryPostRoot"
            ]),
        },
    }
</script>

<style scoped>
    #filepath-row {
        justify-content: center;
        align-items: center;
    }

    #option-buttons-row {
        justify-content: flex-end;
        align-items: center;
        padding-right: 15px;
    }

    #filepath-bar {
        justify-content: flex-start;
        align-items: flex-start;
        padding-left: 15px;
    }
</style>
