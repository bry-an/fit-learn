<template>
  <v-app>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import MainToolbar from "@/components/MainToolbar.vue";
export default Vue.extend({
  name: "App",
  components: { MainToolbar }
});
</script>



<style lang="scss">
</style>
