<template>
  <v-card class="mx-auto mt-2" max-width="500">
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar color="primary lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text subheading>How much do you weigh?</v-card-text>
        <v-card-text>
          <v-text-field label="weight" v-model="userWeight"></v-text-field>How tall are you?
          <v-text-field label="weight" v-model="userWeight"></v-text-field>
          <span
            class="caption grey--text text--darken-1"
          >This information is private and will be used to build your profile.</span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field label="Password" type="password"></v-text-field>
          <v-text-field label="Confirm Password" type="password"></v-text-field>
          <span class="caption grey--text text--darken-1">Please enter a password for your account</span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-3 text-xs-center">
          <v-img
            class="mb-3"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn :disabled="step === 1" flat @click="step--">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn :disabled="step === 3" color="primary" depressed @click="step++">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>
    
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Welcome",
  data: () => ({
    step: 1,
    userWeight: ""
  }),
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Height and Weight";
        case 2:
          return "Step 2";
        case 3:
          return "Step 3";
        default:
          return "Step 1";
      }
    }
  }
});
</script>

