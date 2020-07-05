<template>
    <div>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    My DCloud
                </v-list-item-title>
                <v-list-item-subtitle>
                    Welcome, {{ getUsername }}!
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider/>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Welcomer",
    computed: {
        ...mapGetters([
            "getUsername",
        ])
    }
}
</script>
