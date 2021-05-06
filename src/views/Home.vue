<template>
  <v-carousel
    cycle
    height="auto"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide"
      style="width: 70%; margin: auto;"
    >
    </v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        slides: [
          require('@/assets/images/강원도.png'),
          require('@/assets/images/경기도.png'),
          require('@/assets/images/경상도.png'),
          require('@/assets/images/전라도.png'),
          require('@/assets/images/충청도.png'),
        ],
      }
    },
  }
</script>