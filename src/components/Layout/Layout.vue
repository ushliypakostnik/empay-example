<template>
  <div class="layout">
    <slot name="header" />
    <slot name="body" />
  </div>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .layout {
    padding-bottom: $header__height;
  }
</style>
