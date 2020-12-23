<template>
  <div class="logo" />
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss" scoped>
@import "@/styles/_stylebase.scss";

.logo {
  background: url("#{$images__path--root}logo.svg") no-repeat center center;
  background-size: 100%;
  @include size(96px, 20px);
}
</style>
