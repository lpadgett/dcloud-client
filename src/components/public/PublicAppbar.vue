<template>
    <v-app-bar app="false" color="primary" flat>
        <div id="logo" class="logo">
            <LogoSVG height=90 width="90" color="white"/>
        </div>

        <div id="pageTitle">
            <h1 style="color: white">DCloud</h1>
        </div>

        <v-spacer/>

        <div id="signInButton" class="pa-3">
            <v-btn color="secondary" depressed to="/signin">Sign In To DCloud</v-btn>
        </div>

        <div id="registrationButton" class="pa-1">
            <v-btn color="secondary" depressed to="/register">Register For DCloud</v-btn>
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

<style scoped>
    #logo {
        margin-bottom: 2px;
        margin-top: 5px;
    }
</style>
