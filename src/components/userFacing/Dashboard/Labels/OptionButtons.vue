<template>
    <div>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn text v-on="on">button1</v-btn>
            </template>
            <span>Tooltip</span>
        </v-tooltip>
        <v-btn text>button2</v-btn>
        <v-btn text>button3</v-btn>
        <v-btn text>button4</v-btn>
    </div>
</template>

<script>
    export default {
        name: "OptionButtons"
    }
</script>

<style scoped>

</style>
