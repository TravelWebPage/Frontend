<template>
  <div style="margin: 1%">
        <v-item-group multiple>
        <v-item
          class="ml-13"
          v-for="event in events"
          :key=event
          v-slot="{ active, toggle }"
        >
          <v-chip
            active-class="purple--text"
            :input-value="active"
            @click="toggle"
          >
            {{ event.name }}
          </v-chip>
        </v-item>
      </v-item-group>

    <v-divider class="my-2"></v-divider>

    <div style="margin:1%">
      <v-list three-line>
      <v-list-item
        v-for="(item, i) in test.data.s_event_explain.length"
        :key="i"
        ripple
        @click="() => {}"
      >
        <v-img
          :src="test.data.s_event_img[i]"
          class="mr-4"
          max-width="64"
          min-width="64"
        ></v-img>

        <v-list-item-content>
          <span
            class="text-uppercase font-weight-regular caption"
            v-text="test.data.s_event_name[i]"
          ></span>

          <div v-text="test.data.s_event_explain[i]"></div>
          
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </div>
</div>
</template>

<script>
import axios from 'axios';
  export default {
    
    data: () => ({
      region_name: [

      ],
      test: "",

    }),

    computed: {
      keywords () {
        if (!this.search) return []

        const keywords = []

        for (const search of this.searching) {
          keywords.push(search.keyword)
        }

        return keywords
      },
      searching () {
        if (!this.search) return this.items

        const search = this.search.toLowerCase()

        return this.items.filter(item => {
          const text = item.title.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
    },
    async created() {
    this.test = await axios.get("http://10.120.75.224:3000/asdf")
    console.log(this.test.data.event_explain)
    console.log(this.test.data.s_event_img)
  }
  }
</script>