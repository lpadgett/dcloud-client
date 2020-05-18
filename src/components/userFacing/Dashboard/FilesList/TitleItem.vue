<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title class="title">
                My Files
            </v-list-item-title>
            <v-list-item-subtitle>
                Name
            </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
            <v-list-item-title class="title">
                <br/>
            </v-list-item-title>
            <v-list-item-subtitle>
                Size
            </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
            <v-list-item-title class="title">
                <br/>
            </v-list-item-title>
            <v-list-item-subtitle>
                Last Modified
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
    export default {
        name: "TitleItem"
    }
</script>
