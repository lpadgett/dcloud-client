<template>
  <v-app>
      <div>
        <PublicAppbar></PublicAppbar>
      </div>
    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './Home';
import PublicAppbar from "./PublicAppbar";

export default {
  name: 'DCloud',

  components: {
    Home,
    PublicAppbar
  },

  data: () => ({
    //
  }),
};
</script>
