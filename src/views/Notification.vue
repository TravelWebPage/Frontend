<template>
  <div>
        <v-item-group multiple>
        <v-item
          class="ml-14"
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

    <v-list three-line>
      <v-list-item
        v-for="(item, i) in searching"
        :key="i"
        ripple
        @click="() => {}"
      >
        <v-img
          :src="item.event_name"
          class="mr-4"
          max-width="64"
          min-width="64"
        ></v-img>

        <v-list-item-content>
          <span
            class="text-uppercase font-weight-regular caption"
            v-text="item.region"
          ></span>

          <div v-text="item.event_content"></div>
          
        </v-list-item-content>
      </v-list-item>
    </v-list>
</div>
</template>

<script>

  export default {
    data: () => ({
      items: [
        {
          event_name: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
          event_content: 'TBI’s 5 Best: SF Mocktails to Finish Dry January Strong',
          region: 'Travel',

        },
        {
          event_name: 'https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png',
          event_content: 'PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”',
          region: 'Technology',
        },
        {
          event_name: 'https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg',
          event_content: 'How to Get Media Mentions for Your Business',
          region: 'Media',
        },
        {
          event_name: 'https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg',
          event_content: 'The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence',
          region: 'Technology',
        },
        {
          event_name: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
          event_content: 'Degrees of Freedom and Sudoko',
          region: 'Travel',
        },
      ],
      events: [
        {
          name: "전남도"
        },
        {
          name: "목포시"
        },
        {
          name: "여수시"
        },
        {
          name: "순천시"
        },
        {
          name: "나주시"
        },
        {
          name: "광양시"
        },
        {
          name: "담양군"
        },
        {
          name: "곡성군"
        },
        {
          name: "구례군"
        },
        {
          name: "고흥군"
        },
        {
          name: "보성군"
        },
        {
          name: "화순군"
        },
      ]

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
  }
</script>