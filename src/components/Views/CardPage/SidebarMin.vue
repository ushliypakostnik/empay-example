<template>
  <header
    role="banner"
    class="sidebar-min"
    :class="{ 'sidebar-min--bottom': !isInSubheader }"
  >
    <div class="container">
      <div v-if="isInSubheader">
        <slot />
      </div>
      <div v-else>
        <div class="header__left">
          <slot name="left" />
        </div>
        <div class="header__right">
          <slot name="right" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SidebarMin',

  props: {
    isInSubheader: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_stylebase.scss";

.sidebar-min {
  &--bottom {
    @extend %header;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: $colors__white;
    z-index: $layouts__fixed;
    border-top: 1px solid $colors__border;
  }

  &--in-subheader {

  }
}
</style>
