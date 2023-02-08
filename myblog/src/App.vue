<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >

      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./assets/logo.svg"
            transition="scale-transition"
            width="40"
        />

        <v-img
            alt="Vuetify Name"
            class="shrink mt-1"
            contain
            min-width="100"
            src="./assets/img.png"
            width="100"
        />
      </div>

      <v-tabs
          v-model="tab"
          centered
          dark
          icons-and-text
      >
        <v-tab @click="navigate2tab1">One</v-tab>
        <v-tab @click="navigate2tab2">Two</v-tab>
        <v-tab @click="navigate2tab3">Three</v-tab>
        <v-tab @click="navigate2tab4">Four</v-tab>
      </v-tabs>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <MessageInAppBar></MessageInAppBar>

      <AvatarInAppBar></AvatarInAppBar>


    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer
        dark
        padless
    >
      <v-card
          flat
          tile
          class="indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent
          ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet
          dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
          ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

import AvatarInAppBar from "@/components/AvatarInAppBar";
import MessageInAppBar from "@/components/MessageInAppBar";
export default {
  name: 'App',
  components: {MessageInAppBar, AvatarInAppBar},
  data: () => ({
    user: {
      initials: 'JD',
      fullName: 'John Doe',
      email: 'john.doe@doe.com',
    },
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
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    right: null,
    tab: null,
  }),

  methods: {
    navigate2tab1() {
      this.$router.push({path: "/"});
    },
    navigate2tab2() {
      this.$router.push({path: "/about"});
    },
    navigate2tab3() {
      this.$router.push({path: "/about"});
    },
    navigate2tab4() {
      this.$router.push({path: "/about"});
    },
  }
};
</script>
