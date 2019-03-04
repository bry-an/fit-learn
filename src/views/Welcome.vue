<template>
  <v-dialog v-model="dialog" width="500" persistent class="transparent">
    <v-card max-width="500">
      <v-layout column grow>
        <v-card-title class="title font-weight-regular">
          <v-layout row>
            <v-flex md6>
              <span>{{ currentTitle }}</span>
            </v-flex>
            <v-spacer/>
            <v-flex md1 shrink>
              <v-avatar
                color="primary lighten-2"
                class="subheading white--text"
                size="24"
                v-text="step"
                justify-self-end
              ></v-avatar>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-flex>
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-card-text>Welcome to FitLearn. Please answer a few questions so we can get to know you and you goals a little better.</v-card-text>
            </v-window-item>
            <v-window-item :value="2">
              <v-card-text subheading>How much do you weigh?</v-card-text>
              <v-card-text>
                <v-text-field label="Weight" v-model="userWeight"></v-text-field>How tall are you?
                <v-text-field label="Height" v-model="userHeight"></v-text-field>
              </v-card-text>
              <v-card-text subheading>What is your sex?</v-card-text>
              <v-card-text>
                <v-radio-group v-model="sex">
                  <v-radio value="male" :label="`male`"/>
                  <v-radio value="female" :label="`female`"/>
                </v-radio-group>
                <span
                  class="caption grey--text text--darken-1"
                >This information is kept private and is used to build your profile.</span>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="3">
              <div class="pa-3 text-xs-center">
                <h3 class="title font-weight-light mb-2">Welcome to FitLearn</h3>
                <span class="caption grey--text">Thanks for signing up!</span>
              </div>
            </v-window-item>
          </v-window>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex justify-self-end>
          <v-card-actions>
            <v-btn :disabled="step === 1" flat @click="step--">Back</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" depressed @click="next()">{{ step === 3 ? "Close" : "Next" }}</v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>
    
<script lang="ts">
import Vue from "vue";
import mapGetters from "vuex"

export default Vue.extend({
  name: "Welcome",
  data: () => ({
    step: 1,
    dialog: true,
  }),
  computed: {
    userWeight: {
      get(): number {
        return this.$store.getters["userWeight"]
      },
      set(newVal: number) {
        this.$store.commit("setUserWeight", newVal)
      }
    },
    userHeight: {
      get(): number {
        return this.$store.getters["userHeight"]
      },
      set(newVal: number) {
        this.$store.commit("setUserHeight", newVal)
      }
    },
    sex: {
      get(): string {
        return this.$store.getters["userSex"]
      },
      set(newVal: string) {
        this.$store.commit("setUserSex", newVal)
      }
    },
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Welcome"
        case 2:
          return "Bio stats"
        case 3:
          return "You're all set!"
        default:
          return ""
      }
    },
    
  },
  methods: {
    next() {
      if (this.step === 3) {
        this.dialog = false
      }
      else this.step++
    }
  }
});
</script>

<style lang="sass" scoped>
.rounded-card
  border-radius: 10px
</style>


