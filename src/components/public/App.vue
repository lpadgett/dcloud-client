<template>
  <v-app>
      <div>
        <PublicAppbar></PublicAppbar>
      </div>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import PublicAppbar from "./PublicAppbar";

export default {
  name: 'DCloud',

  components: {
    PublicAppbar
  },

  data: () => ({
    //
  }),
};
</script>
