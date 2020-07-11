<template>
    <v-navigation-drawer permanent justify="start" align="stretch" width="100%">
        <Welcomer/>
        <v-list dense nav align="stretch">
            <v-list-item
                    v-for="button in getSidebarButtons"
                    :key="button.title"
                    link
                    v-on:click="handleClick(button.title)"
            >
                <v-list-item-icon>
                    <v-icon v-bind:color="button.color">{{ button.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ button.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <UsageEstimator/>
    </v-navigation-drawer>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import Welcomer from "./Welcomer.vue";
import UsageEstimator from "./UsageEstimator/UsageEstimator";

export default {
    components: {
        Welcomer,
        UsageEstimator
    },
    computed: {
        ...mapGetters([
            "getSidebarButtons",
        ]),
    },
    methods: {
        ...mapMutations([
            "goToUserFilesRoot" //Maps this.goToUserFilesRoot to this.$store.commit('goToUserFilesRoot')
        ]),
        //FileView function views file
        handleClick: function (item) {
            if(item == "My DCloud"){
                this.goToUserFilesRoot();
            } else {
                alert("You clicked something other than My DCloud");
            }
        },
    },
}
</script>
