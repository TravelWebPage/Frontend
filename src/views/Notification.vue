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
      items: [
        {
          event_img: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
          event_content: 'TBI’s 5 Best: SF Mocktails to Finish Dry January Strong',
          region: 'Travel',

        },
        {
          event_img: 'https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png',
          event_content: 'PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”',
          region: 'Technology',
        },
        {
          event_immg: 'https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg',
          event_content: 'How to Get Media Mentions for Your Business',
          region: 'Media',
        },
        {
          event_img: 'https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg',
          event_content: 'The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence',
          region: 'Technology',
        },
        {
          event_img: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
          event_content: 'Degrees of Freedom and Sudoko',
          region: 'Travel',
        },
      ],
      events: [
        {
          name: "경기"
        },
        {
          name: "강원"
        },
        {
          name: "경상"
        },
        {
          name: "충청"
        },
        {
          name: "전라"
        },
        {
          name: "제주"
        },
        {
          name: "서울"
        },
        {
          name: "인천"
        },
        {
          name: "부산"
        },
        {
          name: "광주"
        },
        {
          name: "대전"
        },
        {
          name: "대구"
        },
        {
          name: "울산"
        },
        {
          name: "세종"
        },
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