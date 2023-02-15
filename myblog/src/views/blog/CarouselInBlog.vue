<template>
  <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      :style="{cursor: 'pointer'}"
  >
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        to=""
    >
      <v-img :src="item.src" height="400"  >
        <h1 style="margin-bottom: 10px" >
          {{ item.src }}
        </h1>
      </v-img>

    </v-carousel-item>
  </v-carousel>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/blogPage/squirrel.jpeg")
        },
        {
          src: require('@/assets/blogPage/sky.jpeg')
        },
        {
          src: require('@/assets/blogPage/bird.jpeg')
        },
        {
          src: require("@/assets/blogPage/planet.jpeg")
        },
      ],
    }
  },
  methods: {
    clickCarouselItem(num) {
      alert("item-" + num);
    }
  }
}
</script>
