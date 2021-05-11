<template>
  <div>
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
      visibility: hidden
    >
    </v-carousel-item>
  </v-carousel>
    
  </div>
</template>


<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        slides: [
          require('@/assets/images/광주.png'),
          require('@/assets/images/나주.png'),
          require('@/assets/images/전주.png'),
          require('@/assets/images/담양.png'),
          require('@/assets/images/영암.png'),
        ],
      }
    },
  async created() {
      this.test = await axios.get("http://10.120.75.224:3000")
      console.log(this.test)
    },
  }
</script>