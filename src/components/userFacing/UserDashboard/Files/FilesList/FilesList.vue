<template>
    <div>
        <UtilityBar/>
        <v-divider/>
        <v-list>
            <LabelItem/>
            <v-divider/>
            <v-list-item-group
                    color="secondary"
                    max="1"
            >
                <File :files="getCurrentFilesBeingViewed"/>
            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import File from "./File";
import UtilityBar from "../UtilityBar/UtilityBar";
import LabelItem from "../Labels/LabelItem";

export default {
    components: {
        UtilityBar,
        LabelItem,
        File
    },
    computed: {
        ...mapGetters([
            "getCurrentFilesBeingViewed"
        ]),
    },
}
</script>
