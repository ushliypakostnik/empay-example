<template>
  <nav
    v-show="isVisible"
    class="subheader"
  >
    <div class="container">
      <div class="header__left">
        <slot name="left" />
      </div>
      <div class="header__right">
        <slot name="right" />
      </div>
    </div>
  </nav>
</template>

<script>
import ScreenHelper from '@/utils/screen-helper';

export default {
  name: 'Subheader',

  data() {
    return {
      isVisible: null,
    };
  },

  mounted() {
    this.checkScrool();
    window.addEventListener('scroll', () => this.checkScrool());
  },

  beforeDestroy() {
    window.removeEventListener('scroll', () => this.checkScrool());
  },

  methods: {
    checkScrool() {
      if (ScreenHelper.isNotGadgets() && ScreenHelper.getScrollProgress() > 30) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_stylebase.scss";

.subheader {
  @extend %header;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: $colors__white;
  z-index: $layouts__fixed;
}
</style>
