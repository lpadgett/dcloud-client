<template>
  <v-app>
      <div>
        <v-app-bar app="false" color="primary"> <!-- Turn app bar into component --->
          <div id="logo" class="pa-2">
            <LogoSVG height=90 width="90"/>
          </div>

          <div id="pageTitle">
            <h1>DCloud</h1>
          </div>

          <v-spacer/>

          <div id="appbarButton1" class="pa-1">
            <v-btn color="secondary" depressed >Sign In To DCloud</v-btn>
          </div>

          <div id="appbarButton2" class="pa-5">
            <v-btn color="secondary" depressed fab></v-btn>
          </div>
        </v-app-bar>
      </div>
    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import LogoSVG from './LogoSVG';
import Home from './Home';

export default {
  name: 'DCloud',

  components: {
    LogoSVG,
    Home
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  h1 {
    color: white;
  }
</style>
