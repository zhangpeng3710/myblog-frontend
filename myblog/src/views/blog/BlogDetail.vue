<template>
  <div>
    <v-container class="lighten-5 mb-6">
      <v-row
          style="min-height: 7500px;"
          justify="space-between"
      >
        <v-spacer/>
        <!-- lg 表示大屏时 显示宽度，md表示缩放到中屏幕时显示宽度，d-md-block表示缩放到中屏幕时-->
        <v-col
            align-self="start"
            lg="2"
            md="3"
            class="d-none d-md-block">
          <v-list
              nav
              dense

          >
            <v-list-item-group
                v-model="selectedItem"
                color="primary"
            >
              <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>

        <v-col align-self="start" xl=6 lg="8" md="9">

          <v-container>
            <!-- image -->
            <v-row>
              <v-col>
                <v-img
                    src="@/assets/detailHeader.jpeg"
                    max-height='300px'
                ></v-img>
              </v-col>
            </v-row>

            <!-- blog -->
            <v-row>
              <v-col>
                <v-md-editor :value=$store.state.mdStore.mdText  mode="preview"></v-md-editor>
              </v-col>
            </v-row>

            <!-- Rating -->
            <v-row>
              <v-col>
                <v-card
                    class=" mx-auto"
                >
                  <v-card-title class="text-h5">
                    Rate This Blog
                  </v-card-title>
                  <v-card-text>
                    <v-rating
                        v-model="rating"
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$ratingFull"
                        half-increments
                        hover
                        large
                    ></v-rating>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions class="justify-space-between">
                    <v-btn text>
                      No Thanks
                    </v-btn>
                    <v-btn
                        color="primary"
                        text
                    >
                      Rate Now
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>

            <!-- Message board -->
            <v-row>
              <v-col>
                <v-text-field> </v-text-field>

                <v-textarea
                    filled
                    auto-grow
                    placeholder="说点什么吧"
                    label=""
                    counter

                    :rules="rules"
                    :value="value"
                ></v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <MessageInBlogDetail></MessageInBlogDetail>
              </v-col>
            </v-row>
          </v-container>
        </v-col>



        <!-- table of content on the right -->
        <v-col
            align-self="start"
            lg="2"
            md="2"
            class="d-none d-lg-block"
        >
          <v-list
              nav
              dense
              style="width: 200px"
          >
            <v-list-item-group
                v-model="selectedItem"
                color="primary"
            >
              <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>

        <v-spacer></v-spacer>


      </v-row>
    </v-container>
  </div>
</template>

<script>


import MessageInBlogDetail from "@/components/MessageInBlogDetail";
export default {
  name: "Details",
  components: {MessageInBlogDetail},
  data() {
    return {

      rules: [v => v.length <= 25 || 'Max 25 characters'],
      value: '',
      selectedItem: 0,
      items: [
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

    };
  },
  methods: {}
};
</script>
