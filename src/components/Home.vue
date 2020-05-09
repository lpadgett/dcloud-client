<template>
    <v-container fill-height>
        <v-row align="center" justify="center">
            <div id="logo" align="center">
                <LogoSVG height=300 width="300" color="black"/>
                <h1>DCloud: The Decentralized, Distributed, Zero-Knowledge Cloud Computing Platform</h1>
            </div>
        </v-row>
        <v-row align="center" justify="center">
            <div id="mainText" align="center" justify="center">
                <h1>What makes us special?</h1>
                <h3>We are a decentralized platform and have no physical infrastructure, so we have no single point of failure.</h3>
                <h3>All encryption on DCloud is zero-knowledge, 100% of the time.</h3>
            </div>
        </v-row>
        <v-row align="center" justify="center">
            <div id="privacyAndterms" align="center" justify="center">
                <h2>No privacy policies or terms of service that take hours to read and entire legal teams to understand.</h2>
                <h3>Why? Because we don't need them! We don't collect any data on you and can't tell how you use our services unless you tell us yourselves. All we can do is make sure our services are operational for those who want to usee them.</h3>
            </div>
        </v-row>
    </v-container>
</template>

<script>
    import LogoSVG from './LogoSVG';

    export default {

        components: {
            LogoSVG
        },

        data: () => ({
            //
        }),
    };
</script>
