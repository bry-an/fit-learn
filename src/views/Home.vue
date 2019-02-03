<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import About from "@/views/About.vue";
@Component({
  components: { About }
})
export default class Home extends Vue {}
</script>
