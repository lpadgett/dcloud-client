<template>
    <v-app-bar app="false" color="primary">
        <div id="logo" class="pa-2">
            <LogoSVG height=90 width="90" color="white"/>
        </div>

        <div id="pageTitle">
            <h1 style="color: white">DCloud</h1>
        </div>

        <v-spacer/>

        <div id="appbarButton1" class="pa-3">
            <v-btn color="secondary" depressed>Sign In To DCloud</v-btn>
        </div>

        <div id="appbarButton2" class="pa-1">
            <v-btn color="secondary" depressed>Register For DCloud</v-btn>
        </div>
    </v-app-bar>
</template>

<script>
    import LogoSVG from './LogoSVG';

    export default {
        name: "PublicAppbar",

        components: {
            LogoSVG
        }
    }
</script>
