<template>
  <v-app>
    <v-app-bar app="false" color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/DCloudTransparent.png"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-app-bar>
    <v-content>
      <LogoSVG/>
    </v-content>
  </v-app>
</template>

<script>
import LogoSVG from './LogoSVG';

export default {
  name: 'DCloud',

  components: {
    LogoSVG,
  },

  data: () => ({
    //
  }),
};
</script>
