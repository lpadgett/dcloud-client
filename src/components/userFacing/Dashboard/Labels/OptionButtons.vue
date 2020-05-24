<template>
    <div>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>
                        {{ 'mdi-heart' }}
                    </v-icon>
                </v-btn>
            </template>
            <span>Add To Favorites</span>
        </v-tooltip>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>
                        {{ 'mdi-pencil' }}
                    </v-icon>
                </v-btn>
            </template>
            <span>Edit</span>
        </v-tooltip>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>
                        {{ 'mdi-eye' }}
                    </v-icon>
                </v-btn>
            </template>
            <span>Preview File</span>
        </v-tooltip>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>
                        {{ 'mdi-delete' }}
                    </v-icon>
                </v-btn>
            </template>
            <span>Delete</span>
        </v-tooltip>
    </div>
</template>

<script>
    export default {
        name: "OptionButtons"
    }
</script>
