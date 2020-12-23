<template>
  <div class="header">
    <div class="container header__container">
      <div class="header__left">
        <Logo />
      </div>
      <div class="header__right">
        <slot name="right" />
      </div>
    </div>
  </div>
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
  @extend %box-shadows;
  height: $header__height;
  width: 100%;
  position: relative;
  z-index: $layouts__content + 200;

  &__container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
