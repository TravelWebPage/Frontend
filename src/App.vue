<template>
    <v-app>
        <v-app-bar color="white" flat>
                
                <img class="ml-10" @click="$router.push({path: '/'})" :src="require('./assets/logo.png')" height="45" />

                <v-spacer />

                <v-spacer />
            
            <v-btn text @click="$router.push({path: '/recommend'})">여행지 추천</v-btn>
            <v-btn text @click="$router.push({path: '/notification'})">공지사항</v-btn>
            
        </v-app-bar>
        
        <v-main>
          <router-view />
        </v-main>
        
    </v-app>
</template>


<script>


export default {
  name: 'App',

  methods:{
    
  }
}
</script>