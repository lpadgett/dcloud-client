<template>
    <div align="left">
        <v-img
          :src="require('../assets/DCloudLogo.svg')"
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
    props: ['height', 'width']
  }
</script>
