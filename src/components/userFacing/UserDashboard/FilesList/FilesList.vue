<template>
    <div>
        <Title/>
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
import Title from "../Labels/Title";
import LabelItem from "../Labels/LabelItem";

export default {
    components: {
        Title,
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
