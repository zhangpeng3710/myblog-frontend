<template>
  <v-dialog
      v-model="isShow"
      :max-width="options.width"
      @keyup.esc="cancel"
  >
    <v-card>
      <v-toolbar :color="options.color" dense flat>
        <v-toolbar-title class="font-weight-bold white--text">{{ options.title }}</v-toolbar-title>
      </v-toolbar>

      <v-card-text v-show="!!options.message" class="subtitle-1 mt-5">{{ options.message }}</v-card-text>

      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn
            v-if="options.visible.btnCancel"
            @click.native="cancel"
            class="blue--text font-weight-bold"
            text>Cancel
        </v-btn>
        <v-btn
            v-if="options.visible.btnOk"
            @click.native="ok"
            class="blue--text font-weight-bold"
            text>Ok
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
/**
 * Vuetify Confirm Dialog component
 *
 * Insert component where you want to use it:
 * <confirm ref="confirm"></confirm>
 *
 * Call it:
 * this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})
 * Or use await:
 * if (await this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' })) {
 *   // yes
 * }
 * else {
 *   // cancel
 * }
 *
 * Alternatively you can place it in main App component and access it globally via this.$root.$confirm
 * <template>
 *   <v-app>
 *     ...
 *     <confirm ref="confirm"></confirm>
 *   </v-app>
 * </template>
 *
 * mounted() {
 *   this.$root.$confirm = this.$refs.confirm.open
 * }
 */
export default {
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
    options: {
      title: 'Confirm',
      message: null,
      visible: {
        btnOk: true,
        btnCancel: true,
      },
      color: 'primary',
      width: 390,
    }
  }),
  computed: {
    isShow: {
      get() {
        return this.dialog
      },
      set(value) {
        this.dialog = value
        if (value === false) {
          this.cancel()
        }
      }
    }
  },
  methods: {
    open(options) {
      this.dialog = true
      this.options = Object.assign(this.options, options)
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    ok() {
      this.resolve(true)
      this.dialog = false
    },
    cancel() {
      this.resolve(false)
      this.dialog = false
    }
  }
}
</script>
