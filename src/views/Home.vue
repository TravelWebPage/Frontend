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
      @click="$router.push({path: regions[i]})"
      style="width: 75%; margin: auto;"
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
          require('@/assets/images/Gwangju_img/광주.png'),
          require('@/assets/images/Naju_img/나주.png'),
          require('@/assets/images/Jeonju_img/전주.png'),
          require('@/assets/images/Damyang_img/담양.png'),
          require('@/assets/images/Yeongam_img/영암.png'),
        ],
        regions: ['/Gwangju','/Naju','/Jeonju','/Damyang','/Yeongam']
      }
    },
  async created() {
      this.test = await axios.get("http://10.120.75.224:3000")
      console.log(this.test)
    },
  }
</script>