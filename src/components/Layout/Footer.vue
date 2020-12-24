<template>
  <footer
    role="contentinfo"
    class="footer"
  >
    <div class="container">
      <div class="footer__grid">
        <div>
          <div class="footer__title">Заголовок</div>
          <ul class="footer__list">
            <li>Ссылка</li>
            <li>Ссылка</li>
            <li>Ссылка</li>
            <li>Ссылка</li>
          </ul>
        </div>
        <div>
          <div class="footer__title">Заголовок</div>
          <ul class="footer__list">
            <li>Ссылка</li>
            <li>Ссылка</li>
            <li>Ссылка</li>
            <li>Ссылка</li>
            <li>Ссылка</li>
            <li>Ссылка</li>
          </ul>
        </div>
        <div>
          <div class="footer__title">Заголовок</div>
          <ul class="footer__list">
            <li>Ссылка</li>
            <li>Ссылка</li>
            <li>Ссылка</li>
            <li>Ссылка</li>
            <li>Ссылка</li>
            <li>Ссылка</li>
          </ul>
        </div>
        <div>
          <div class="footer__title">Заголовок</div>
          <ul class="footer__list">
            <li>Ссылка</li>
            <li>Ссылка</li>
            <li>Ссылка</li>
            <li>Ссылка</li>
            <li>Ссылка</li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__bottom-left">© 2020 Empay, Inc. All rights reserved</div>
        <div class="footer__bottom-right">
          <a href="#" class="link">Контролы</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
@import "@/styles/_stylebase.scss";

.footer {
  background: $colors__greys--lighter;
  border-top: 1px solid $colors-_border;

  &__grid {
    padding-top: $gutter2 * 2;
    padding-bottom: $gutter2 * 2;
    @include adaptive-grid('footer');

    @include md {
      padding-bottom: $gutter2 * 3;
    }
  }

  &__title {
    margin-bottom: 16px;
    text-transform: uppercase;
    @include text($font-size--xsmall, $font-weight__semibold);
  }

  &__list {
    > li {
      @include text($font-size--small, $font-weight__regular);

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    @include gadgets {
      padding-bottom: $gutter2;
      border-bottom: 1px solid $colors-_border;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid $colors-_border;
    padding-top: $gutter2;
    padding-bottom: $gutter2;
    margin-top: -1 * $gutter2;

    &-left {
      @include text($font-size--small, $font-weight__regular);
    }

    &-right {
      @include text($font-size--small, $font-weight__bold);
    }

    @include gadgets {
      border-top: none;
      padding-top: 0;
      flex-direction: column;
      align-items: flex-start;

      &-left {
        order: 2;
      }

      &-right {
        margin-bottom: 18px;
        order: 1;
      }
    }
  }
}
</style>
