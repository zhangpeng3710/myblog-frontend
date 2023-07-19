<template>
  <v-container>
    <v-row>
      <v-col>
        <v-md-editor
            v-model="text"
            height="600px"
            @save="saveMd"
        ></v-md-editor>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MdEditor",
  data() {
    return {
      text: '',
    };
  },
  methods: {
    saveMd() {
      this.$store.state.mdStore.mdText = this.text
      console.log(this.$store.state.mdStore.mdText)
    }
  }
};
</script>
