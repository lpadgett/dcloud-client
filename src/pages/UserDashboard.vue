<template>
<v-row no-gutters class="fill-height">
    <v-col :cols="3">
        <NavigationDrawer/>
    </v-col>
    <v-col :cols="9">
        <FilesList/>
    </v-col>
</v-row>
</template>

<script>
import NavigationDrawer from "../components/userFacing/UserDashboard/NavigationDrawer";
import FilesList from "../components/userFacing/UserDashboard/FilesList/FilesList";
export default {
    components: {
        NavigationDrawer,
        FilesList
    }
}
</script>
