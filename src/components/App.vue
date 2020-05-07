<template>
  <v-app>
    <v-app-bar app="false" color="primary" dark> <!-- Turn app bar into component --->
      <div class="d-flex align-center">
        <LogoSVG height=90 />
      </div>
    </v-app-bar>
    <v-content>
      <ContentStuff/>
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
