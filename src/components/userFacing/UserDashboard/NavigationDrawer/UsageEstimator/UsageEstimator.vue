<template>
    <v-list-item>
        <div class="storage-usage"> <!-- TODO: don't hardcode "GB" -->
            <br/>
            <p>Storage: {{ currentStorageUsed }} of {{ maxStorageCapacity }} Used</p>
            <v-progress-linear v-model="percentStorageUsed" color="secondary"/>
        </div>
    </v-list-item>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "UsageEstimator",
    computed: {
        ...mapGetters([
            "getCurrentUserStorageUsage",
            "getUserStorageLimit",
        ]),
        currentStorageUsed: function() {
            if(this.getCurrentUserStorageUsage >= 1000) {
                return ((this.getCurrentUserStorageUsage / 1000) + " TB");
            } else {
                return (this.getCurrentUserStorageUsage + " GB");
            }
        },
        maxStorageCapacity: function () {
            if(this.getUserStorageLimit >= 1000) {
                return ((this.getUserStorageLimit / 1000) + " TB");
            } else {
                return "GB";
            }
        },
        percentStorageUsed: function () { //Turns storage usage into percentage for usage in the usage bar
            return 100*(this.getCurrentUserStorageUsage/this.getUserStorageLimit);
        },
    },
}
</script>

<style scoped>
    .storage-usage {
        margin: auto;
    }
</style>
