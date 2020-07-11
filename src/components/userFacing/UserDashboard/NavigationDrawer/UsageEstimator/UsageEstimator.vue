<template>
    <v-list-item>
        <div class="storage-usage"> <!-- TODO: don't hardcode "GB" -->
            <p>Usage: {{ getCurrentUserStorageUsage }}GB of {{ getUserStorageLimit }}GB</p>
            <v-progress-linear v-model="storageUsage" color="secondary"/>
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
        storageUsage: function () {
            return 100*(this.getCurrentUserStorageUsage/this.getUserStorageLimit);
        }
    },
}
</script>

<style scoped>
    .storage-usage {
        margin: auto;
    }
</style>
