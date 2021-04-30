<template>
    <v-app>
        <v-app-bar app flat>
            <v-btn icon>
                <v-icon 
                    large 
                    right 
                    dark 
                    color="yellow darken-2"
                >fa-map-marker-alt
                </v-icon>
            </v-btn>
            <v-app-bar-title>여기갈래</v-app-bar-title>

                <v-spacer />
     
                      <v-responsive max-width="260">
                        <v-text-field
                          placeholder="검색 시작하기"
                          
                          dense
                          flat
                          hide-details
                          rounded
                          solo-inverted
                          >
                        </v-text-field>
                        
                    </v-responsive>
                    <v-btn icon>
                            <v-icon color="yellow darken-2">
                                fa-search
                            </v-icon>
                        </v-btn>

                <v-spacer />

            <v-btn text>공지사항</v-btn>
            <v-btn text>마이페이지</v-btn>
            
        </v-app-bar>
            
        <v-content>
            <v-carousel
                cycle
                height="500"
                hide-delimiter-background
                show-arrows-on-hover
  >             
                <template v-slot:prev="{ on, attrs }">
                  <v-btn
                    color="success"
                    v-bind="attrs"
                    v-on="on"
                  >Previous slide</v-btn>
                </template>
                <template v-slot:next="{ on, attrs }">
                  <v-btn
                    color="info"
                    v-bind="attrs"
                    v-on="on"
                  >Next slide</v-btn>
                </template>
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                >
                  <v-sheet
                    :color="colors[i]"
                    height="150%"
                  >
                    <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                    >
                      <div class="display-3">
                        {{ slide }} Slide
                      </div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
             </v-carousel>
        </v-content>

        

    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>