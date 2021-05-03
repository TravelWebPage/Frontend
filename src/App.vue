<template>
    <v-app>
        <v-app-bar color="white" flat>
                
                <img class="ml-3" @click="go_home" :src="require('./assets/logo.png')" height="45" />

                <v-spacer />
     
                      <v-responsive max-width="260">
                        <v-text-field
                          placeholder="검색 시작하기"
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

            <v-btn text>여행지 추천</v-btn>
            <v-btn text>공지사항</v-btn>
            
        </v-app-bar>
            
    <v-main>
      <Home />
    </v-main>
        

    </v-app>
</template>

<script>

import Home from "./components/Home";

  export default {
    name: 'App',

    components: {
      Home,
    },

    data () {
      return {
        go_home(){
          console.log('go home')
        }
      }
    },
    methods:{
      
    },
  }
</script>