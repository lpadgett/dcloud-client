<template>
    <v-container fill-height>
        <v-row align="center" justify="center">
            <div id="logo" align="center">
                <LogoSVG height=300 width="300" color="black"/>
                <h2>DCloud: The Decentralized, Distributed, Zero-Knowledge Cloud</h2>
                <h2>Here, your data is <i>your</i> data, and yours alone. No catches.</h2>
            </div>
        </v-row>
        <v-row align="center" justify="center">
            <div id="mainText" align="center" justify="center">
                <h2>No obnoxious privacy policies or terms of service that take hours to read and legal teams to understand.</h2>
                <h2>We can't make sense of the data you upload to DCloud as it is all zero-knowledge encrypted. We can't mine it. We can't sell it. We don't even know where it's physically stored!</h2>
            </div>
        </v-row>
        <v-row align="center" justify="center">
            <div id="mainText2" align="center" justify="center">
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
