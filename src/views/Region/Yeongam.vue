<template>
  <v-container class="pa-4 text-center">
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <template v-for="(item, i) in items">
        <v-col
          :key="i"
          cols="12"
          md="20"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :src="item.img"
                height="480px"
              >
                 <v-card-title class="title white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="character" v-if="i === 0"
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    >
                      {{ test.data.data[4].character }}
                    </p>

                    <div>
                      <p class="context" v-if="i === 1"
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    >
                        {{ test.data.data[4].context }}
                      </p>
                     <p class="tour" v-if="i === 2"
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    >
                        {{ test.data.data[4].tour }}
                      </p>
                    </div>

                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

  export default {
    data: () => ({
      items: [
        {
          img: require('@/assets/images/Yeongam_img/영암군.png'),
        },
        {
          img: require('@/assets/images/Yeongam_img/영암소개.png'),
        },
        {
          img: require('@/assets/images/Yeongam_img/영암관광지.png'),
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',

    }),
    async created() {
      this.test = await axios.get("http://10.120.75.224:3000/postdata/region_explain")
      console.log(this.test)
    },
  }
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}
.character {
  transition: opacity .4s ease-in-out;
  font-size: 40px;
  padding-top: 200px;
  color: #fff;
  font-weight: bold;
}
.context {
  transition: opacity .4s ease-in-out;
  font-size: 30px;
  padding-top: 200px;
  color: #fff;
  font-weight: bold;
}
.tour {
  transition: opacity .4s ease-in-out;
  font-size: 30px;
  padding-top: 200px;
  color: #fff;
  font-weight: bold;
}

.v-card:not(.on-hover) {
  opacity: 1;
 }
 .v-card {
  opacity: 0.6;
 }
 h1 {
   text-align: center;
   margin-top: 30%;
 }
.character:not(.on-hover) {
  opacity: 0;
 }
 .character {
  opacity: 1;
 }
 .context:not(.on-hover) {
  opacity: 0;
 }
 .context {
  opacity: 1;
 }
 .tour:not(.on-hover) {
  opacity: 0;
 }
 .tour {
  opacity: 1;
 }
</style>