
<template>
  <div id="app" :class="theme">
    <pre :class="$style.pre">{{ theme }}</pre>
    <img :class="$style.img" src="./assets/logo.png" @click="toggleTheme">
    <div :class="$style.nav">
      <router-link to="/">SampleRoute</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"

  export default Vue.extend({
    data() {
      return {
        theme: "theme-light",
      }
    },
    methods: {
      toggleTheme() {
        this.theme = this.theme === "theme-dark" ? "theme-light" : "theme-dark"
      },
    },
  })
</script>

<style lang="scss" module>
  // global
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  // all themes
  .img { display: block; margin: 0 auto; }
  .nav { text-align: center; a { text-decoration: none; } }
  .pre { margin: 0; text-align: center; }
  // light theme
  :global(.theme-light) {
    background-color: #cccccc;
    color: #000000;
    .nav a { color: #000000; }
  }
  // dark theme
  :global(.theme-dark) {
    background-color: red;
    color: #eeeeee;
    .nav a { color: #eeeeee; }
  }
</style>
