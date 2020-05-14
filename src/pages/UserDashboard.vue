<template>
<v-row no-gutters class="fill-height">
    <v-col>
        <v-navigation-drawer permanent justify="start" align="stretch" width="300">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            My DCloud
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            Welcome, {{ username }}!
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list dense nav align="stretch">
                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
    </v-col>
    <v-col>
        <p>joe mama</p>
    </v-col>
</v-row>
</template>

<script>
export default {
    data () {
        return {
            username: '[insert username here]',
            items: [
                { title: 'My DCloud', icon: 'mdi-cloud' },
                { title: 'Favorites', icon: 'mdi-heart' },
                { title: 'Trash', icon: 'mdi-delete' }
            ],
            right: null,
        }
    },
}
</script>
