<template>
    <v-row >
      <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
      >
        <v-card>
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar
                class="ma-3"
                height="200"
                width="250"
                tile
            >
              <v-img :src="item.src"></v-img>
            </v-avatar>
            <div>
              <v-card-title
                  class="text-h5"
                  v-text="item.title"
              ></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>

              <v-card-actions>
                <v-btn text>
                  Listen Now
                </v-btn>

                <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                >
                  START RADIO
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: "CardForBlogList",
  data: () => ({
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
  }),
}
</script>
