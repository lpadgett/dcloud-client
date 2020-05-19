<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title id="MyFiles">My Files</v-list-item-title>
        </v-list-item-content>
        <v-btn text>button1</v-btn>
        <v-btn text>button2</v-btn>
        <v-btn text>button3</v-btn>
        <v-btn text>button4</v-btn>
    </v-list-item>
</template>

<script>
    export default {
        name: "TitleItem"
    }
</script>

<style scoped>
    .v-list-item-title MyFiles {
        font-size: large;
    }
</style>
