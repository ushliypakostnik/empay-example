<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex';

// const { mapGetters } = createNamespacedHelpers('utils');

export default {
  name: 'App',

  computed: {
    // ...mapGetters({
    //   theme: 'theme',
    // }),
  },
};
</script>

<style lang="scss" src="./styles/_main.scss" />
