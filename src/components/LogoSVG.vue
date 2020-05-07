<template>
        <v-img
          :src="require('../assets/DCloudLogo.svg')"
          class="shrink mr-2"
          transition="scale-transition"
          contain
          :height="height"
        />
</template>

<script>
  export default {
    name: 'LogoSVG',
    props: ['height']
  }
</script>
