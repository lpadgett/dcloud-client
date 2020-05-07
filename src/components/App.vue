<template>
  <v-app>
    <div>
    <v-app-bar app="false" color="primary" dark> <!-- Turn app bar into component --->
      <div id="appbarLogo">
        <LogoSVG height=90 width="90"/>
      </div>
      <v-spacer/>
      <div id="appbarButtons">
        <v-btn></v-btn>
      </div>
    </v-app-bar>
      </div>
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
