<template>
  <v-item-group active-class="#ffbb03">
    <v-container>
      <v-row>
        <v-col
          v-for="n in 24"
          :key="n"
          cols="12"
          md="4"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              class="d-flex align-center"
              dark
              height="300"
              width="300"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center"
                >
                  Active<br>
                  <v-btn @click="method1">click</v-btn>
                  
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  methods: {
    method1: function(){
      alert('clicked')
    }
  }
  
}
</script>