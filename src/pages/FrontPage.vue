<template>
    <v-container fill-height>
        <v-row align="center" justify="center">
            <div id="logo" align="center">
                <LogoSVG height=300 width="300" color="black"/>
                <h1>DCloud: Decentralized Zero-Knowledge Cloud Storage</h1>
            </div>
        </v-row>
        <v-row align="center" justify="center">
            <div id="mainText" align="center" justify="center">
                <h1>What makes us special?</h1> <!-- Condense all this text later into little dropdown boxes-->
                <h3>Decentralized storage. No single person or company in any single country owns all the servers your files are stored on.</h3>
                <h3>We provide a discount to those who pay with cryptocurrency (yes, Monero and ZCash are payment options)!</h3>
                <h3>Our standard username/password authentication system is trustless!</h3>
                <h3>You can sign in with your Trezor cryptocurrency wallet!</h3>
                <h3>End-to-End AND Client-side encryption! Not even Google Drive does that!</h3>
                <h3>All encryption on DCloud is zero-knowledge, 100% of the time.</h3>
                <h3>Data collection? Data mining? Nonexistent!</h3>
                <h3>No Amazon, Microsoft, or Google Infrastructure!</h3>
                <h3>Last but not least: we are completely open-source (:</h3>
            </div>
        </v-row>
    </v-container>
</template>

<script>
    import LogoSVG from '../components/public/LogoSVG';

    export default {

        name: 'DCloud',

        components: {
            LogoSVG
        },

        data: () => ({
            //
        }),
    };
</script>
