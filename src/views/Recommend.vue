<template>
  <v-card
    flat
    tile
  >

    <v-container
      v-for="type in types"
      :key="type"
      fluid
    >
      <v-subheader>{{ type }}</v-subheader>

      <v-row>
        <v-spacer></v-spacer>
        <v-col
          v-for="card in cards"
          :key="card"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card>
            <v-img
              :src="`https://picsum.photos/200/300?image=${getImage()}`"
              height="300px"
            >
              <span
                class="headline white--text pl-4 pt-4 d-inline-block"
                v-text="card"
              ></span>
            </v-img>

            <v-card-actions class="white justify-center">
               <v-col cols="auto">
                <v-dialog
                  transition="dialog-top-transition"
                  max-width="600"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="#FFBD0C"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Learn More
                    </v-btn>
                  </template>

                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar
                        color="#FFBD0C"
                        dark
                      >
                        Opening from the top
                      </v-toolbar>

                      <v-card-text>
                        <div class="text-h2 pa-12">
                          Hello world!
                        </div>
                      </v-card-text>

                      <v-card-actions class="justify-end">
                        <v-btn
                          text
                          @click="dialog.value = false"
                        >
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>

                  </template>
                </v-dialog>
              </v-col>
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      types: ['Places to Be', 'Places to See', 'Place to Feel', 'Place to Eat'],
      cards: ['Good', 'Best', 'Finest'],
      socials: [
        {
          icon: 'mdi-facebook',
          color: 'indigo',
        },
        {
          icon: 'mdi-linkedin',
          color: 'cyan darken-1',
        },
        {
          icon: 'mdi-instagram',
          color: 'red lighten-3',
        },
      ],
    }),

    methods: {
      getImage () {
        const min = 550
        const max = 560

        return Math.floor(Math.random() * (max - min + 1)) + min
      },
    },
  }
</script>