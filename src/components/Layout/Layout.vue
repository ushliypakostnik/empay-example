<template>
  <div class="layout">
    <Header>
      <LangSwitch /><ThemeSwitch />
    </Header>
    <slot />
  </div>
</template>

<script>
import Header from '@/components/Layout/Header.vue';
import LangSwitch from '@/components/Elements/LangSwitch.vue';

export default {
  name: 'Layout',

  components: {
    Header,
    LangSwitch,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: $header__height;

    .container {
      max-width: $breakpoints__min;
      text-align: center;
    }
  }
</style>
