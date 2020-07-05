<template>
    <div v-if="color === 'black'">
        <v-img
          :src="require('../../assets/icons/DCloudLogoBlack.svg')"
          class="shrink mr-2"
          transition="scale-transition"
          contain
          :height="height"
          :width="width"
        />
    </div>
    <div v-else>
        <v-img
          :src="require('../../assets/icons/DCloudLogoWhite.svg')"
          class="shrink mr-2"
          transition="scale-transition"
          contain
          :height="height"
          :width="width"
        />
    </div>
</template>

<script>
  export default {
    name: 'LogoSVG',
    props: ['height', 'width', 'color']
  }
</script>
