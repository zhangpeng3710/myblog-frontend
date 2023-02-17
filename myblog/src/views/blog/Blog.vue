<template>
  <v-container
      class=" lighten-5 mb-6"
  >
    <v-row
        align="center"

        justify="space-around"
    >
      <v-col align="center" lg="9">

        <CarouselInBlog></CarouselInBlog>

        <!-- chips -->
        <v-card-text>
          <span class="title">Select Category</span>
          <v-chip-group
              v-model="selectedChips"
              multiple
              active-class="primary--text"
              column
          >
            <v-chip
                filter
                outlined
                v-for="tag in tags"
                :key="tag"
                @click="click"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-card-text>

        <CardForBlogList></CardForBlogList>
        <v-pagination
            v-model="page"
            :length="pageLength"
            :total-visible="8"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>


import CarouselInBlog from "@/views/blog/CarouselInBlog";
import {nextTick} from "vue";
import CardForBlogList from "@/views/blog/CardForBLogList";

export default {
  name: "Blog",
  components: {CardForBlogList, CarouselInBlog},
  data() {
    return {
      loading: false,
      selectedChips: [],
      page: 1,
      pageLength: 200,

      cards: [
        {title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12},
        {title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6},
        {title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6},
      ],
      list: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
      tags: [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
      ],
    };
  },
  mounted() {
    this.$locale = 'fr';
  },
  methods: {
    setLocaleToFr() {
      this.$locale = 'fr';
    },
    click() {
      nextTick(() => alert(this.selectedChips))
    },
    showMessage() {
      alert("click")
    }
  }
};
</script>
