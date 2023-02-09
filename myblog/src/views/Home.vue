<template>
  <div>
    <section >
      <v-parallax :src="heroImg" height="850">
        <v-layout
            column
            align-center
            justify-center
            class="white--text"
        >
          <img src="../assets/vuetify-log.svg" alt="Vuetify.js" height="200">
          <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
          <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
          <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="#"
              @click="$vuetify.goTo('#sec2')"
          >
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
          column
          wrap
          class="my-5"
          align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center" id="sec2">
            <h2 class="headline">The best way to start developing</h2>
            <span class="subheading">
                Cras facilisis mi vitae nunc
              </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">mdi-palette</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Material Design</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Fast development</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Completely Open Sourced</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax :src="sectionImg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
          <em>Kick-start your application today</em>
          <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
          >
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {},
  data() {
    return {
      title: "Your Logo",
      heroImg: require("../assets/homePage/hero.jpeg"),
      sectionImg: require("../assets/homePage/section.jpeg")
    };
  },
  mounted() {
    this.$locale = 'fr';
  },
  methods: {
    setLocaleToFr() {
      this.$locale = 'fr';
    }
  }
};
</script>
