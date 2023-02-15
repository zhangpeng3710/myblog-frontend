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


        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-list-item to="/details" :key="index">
              <v-list-item-avatar tile height="100" width="150">
                <v-img src="@/assets/vue.png" height="150" width="200"/>
              </v-list-item-avatar>

              <v-list-item-content align="left">
                <v-list-item-title
                    class="headline"
                >Doc 1 Three line headline
                </v-list-item-title>
                <v-list-item-subtitle class="">
                  Three line text string example with two actions. One to two lines is preferable. Three lines
                  should be considered the maximum string length on desktop in order to keep messages short and
                  actionable.
                  "item.text"

                  Three line text string example with two actions. One to two lines is preferable. Three lines
                  should be considered the maximum string length on desktop in order to keep messages short and
                  actionable.
                  "item.text"Three line text string example with two actions. One to two lines is preferable. Three lines
                  should be considered the maximum string length on desktop in order to keep messages short and
                  actionable.
                  "item.text"Three line text string example with two actions. One to two lines is preferable. Three lines
                  should be considered the maximum string length on desktop in order to keep messages short and
                  actionable.
                  "item.text"212
                </v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>
          </template>
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
  name: "Blog",
  components: {CarouselInBlog},
  data() {
    return {
      loading: false,
      selectedChips: [],
      page: 1,
      pageLength: 200,
      selectedItem: 0,
      items: [
        {text: 'My Files', icon: 'mdi-folder', path: ''},
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
