
<template>
  <p :class="$style.root">{{ msg }}</p>
</template>

<script lang="ts">
  import Vue from "vue"

  export default Vue.extend({
    props: {
      msg: { default: "", type: String },
    },
  })
</script>

<style lang="scss" module>
  // all themes
  .root { padding: 10px; text-align: center; }
  // light theme
  :global(.theme-light) {
    .root { background-color: #aaaaaa; }
  }
  // dark theme
  :global(.theme-dark) {
    .root { background-color: darkred; }
  }
</style>
