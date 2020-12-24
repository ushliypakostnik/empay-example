<template>
  <header
    role="banner"
    class="header"
  >
    <div class="container">
      <div class="header__left">
        <Logo />
      </div>
      <div class="header__right">
        <slot name="right" />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Layout/Logo.vue';

export default {
  name: 'Header',

  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_stylebase.scss";

.header {
  @extend %header;
}
</style>
