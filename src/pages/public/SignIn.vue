<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-spacer></v-spacer>
                        <v-toolbar-title>Sign In To DCloud</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                label="Username"
                                name="username"
                                prepend-icon="mdi-account"
                                type="text"
                            ></v-text-field>

                            <v-text-field
                                id="password"
                                label="Password"
                                name="password"
                                prepend-icon="mdi-lock"
                                type="password"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" to="/">Back</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" to="/home">Sign In</v-btn> <!-- Just sign in without auth as temporary way to facilitate UI building. Add actual auth later -->
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        methods: {
            historyExists () {
                return window.history?.length > 2
            },

        },
        props: {
            source: String,
        },
    }
</script>
