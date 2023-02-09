<template>
  <v-container
      class=" lighten-5 mb-6"
  >
    <v-row
        align="center"
        no-gutters
        justify="space-around"
    >
      <v-col align="center" md="9">

        <CarouselInBlog></CarouselInBlog>

        <v-divider></v-divider>

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


        <v-list three-line>
          <v-list-item-group
              v-model="selectedItem"
              color="primary"
          >
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
            >
              <v-banner two-line>
                <v-row justify="space-around">
                  <v-col cols="3">
                    <v-img src="@/assets/vue.png" max-height="150" max-width="150"/>
                  </v-col>
                  <v-col cols="7">
                    Three line text string example with two actions. One to two lines is preferable. Three lines
                    should be considered the maximum string length on desktop in order to keep messages short and
                    actionable.

                    <template v-slot:actions>
                      <v-btn
                          text
                          color="deep-purple accent-4"
                      >
                        Action
                      </v-btn>
                      <v-btn
                          text
                          color="deep-purple accent-4"
                      >
                        Action
                      </v-btn>
                    </template>
                  </v-col>
                </v-row>
              </v-banner>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>

    <v-pagination
        v-model="page"
        :length="pageLength"
        :total-visible="8"
    ></v-pagination>
  </v-container>

</template>

<script>


import CarouselInBlog from "@/views/blog/CarouselInBlog";
import {nextTick} from "vue";

export default {
  name: "Home",
  components: {CarouselInBlog},
  data() {
    return {
      selectedChips: [],
      page: 1,
      pageLength: 200,
      selectedItem: 0,
      items: [
        {text: 'My Files', icon: 'mdi-folder'},
        {text: 'Shared with me', icon: 'mdi-account-multiple'},
        {text: 'Starred', icon: 'mdi-star'},
        {text: 'Recent', icon: 'mdi-history'},
        {text: 'Offline', icon: 'mdi-check-circle'},
        {text: 'Uploads', icon: 'mdi-upload'},
        {text: 'Backups', icon: 'mdi-cloud-upload'},
        {text: 'My Files', icon: 'mdi-folder'},
        {text: 'Shared with me', icon: 'mdi-account-multiple'},
        {text: 'Starred', icon: 'mdi-star'},
        {text: 'Recent', icon: 'mdi-history'},
        {text: 'Offline', icon: 'mdi-check-circle'},
        {text: 'Uploads', icon: 'mdi-upload'},
        {text: 'Backups', icon: 'mdi-cloud-upload'},
      ],
      alignments: [
        'start',
        'center',
        'end',
      ],
      cards: [
        {title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12},
        {title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6},
        {title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6},
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

    }
  }
};
</script>
