<template>
    <v-app>
        <v-app-bar color="white" flat>
                
                <img class="ml-10" @click="$router.push({path: '/'})" :src="require('./assets/logo.png')" height="45" />

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
            
            <v-btn text @click="$router.push({path: '/recommend'})">여행지 추천</v-btn>
            <v-btn text @click="$router.push({path: '/notification'})">공지사항</v-btn>
            
        </v-app-bar>

        <router-view />
        
    </v-app>
</template>


<script>


export default {
  name: 'App',

  methods:{
    
  }
}
</script>