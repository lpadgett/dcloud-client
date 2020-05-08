<template>
  <v-app>
    <div>
    <v-app-bar app="false" color="primary"> <!-- Turn app bar into component --->
        <LogoSVG height=90 width="90"/>
      <v-spacer/>
      <div id="appbarButtons">
        <v-btn color=""></v-btn>
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
