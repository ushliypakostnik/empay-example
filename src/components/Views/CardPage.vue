<template>
  <Layout class="card-page">
    <template #header>
      <Header>
        <template #right>
          <a
            href="#"
            class="link"
          >Контролы</a>
        </template>
      </Header>
    </template>
    <template #body>
      <section class="card-page__section--1">
        <div class="container">
          <section class="card-page__section--1-left">
            <a
              href="#"
              class="link"
            >Контролы</a>
          </section>
          <section class="card-page__section--1-right">
            <a
              href="#"
              class="link"
            >Контролы</a>
          </section>
        </div>
      </section>
      <section class="card-page__section--2">
        <div class="container">
          <section class="card-page__section--2-gallery">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </section>
        </div>
      </section>
      <section class="card-page__section--3">
        <div class="container">
          <div
            class="card-page__test"
            v-html="test"
          />
        </div>
      </section>
    </template>
  </Layout>
</template>

<script>
import ScreenHelper from '@/utils/screen-helper';

import Layout from '@/components/Layout/Layout.vue';
import Header from '@/components/Layout/Header.vue';

export default {
  name: 'CardPage',

  components: {
    Layout,
    Header,
  },

  data() {
    return {
      test: null,
    };
  },

  mounted() {
    this.checkTest();
    window.addEventListener('resize', () => this.checkTest());
  },

  beforeDestroy() {
    window.removeEventListener('resize', () => this.checkTest());
  },

  methods: {
    checkTest() {
      if (ScreenHelper.isLG()) {
        this.test = `<span>LG-типоразмер:</span> на экранах больше ${ScreenHelper.LG}px, фиксированный контейнер 1600px шириной.`;
      } else if (ScreenHelper.isMD()) {
        this.test = `<span>MD-типоразмер:</span> на экранах больше ${ScreenHelper.MD}px, контейнер резиновый с отступом 80px по краям.`;
      } else if (ScreenHelper.isSM()) {
        this.test = `<span>SM-типоразмер:</span> на экранах больше ${ScreenHelper.SM}px, контейнер резиновый с отступом 40px по краям.`;
      } else {
        this.test = `<span>XS-типоразмер:</span> на мобильных экранах до  ${ScreenHelper.SM - 1}px, контейнер резиновый с отступом 24px по краям.`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  $gallery__height--lg: 574px;
  $gallery__height--md: 32.6vw;
  $gallery__height--sm: 32.6vw;
  $gallery__height--xs: 133.155vw;

  .card-page {
    &__section {
      &--1 {
        padding: 32px 0;

        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }

      &--2 {
        .container {
          @include xs {
            padding-left: 0;
            padding-right: 0;
          }
        }

        &-gallery {
          display: grid;
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 1fr 1fr 0.5fr 1fr;
          gap: 8px 14px;
          @include size(100%, $gallery__height--lg);

          @include md {
            height: $gallery__height--md;
          }

          @include sm {
            height: $gallery__height--sm;
          }

          @include xs {
            grid-template-rows: 1fr;
            grid-template-columns: 1fr;
            height: $gallery__height--xs;
          }

          > div {
            display: flex;
            justify-content: center;
            align-items: center;
            background: $colors__greys--test;
            color: $colors__white;
            @include text($font-size--large, $font-weight--bold);

            &:nth-of-type(1),
            &:nth-of-type(2),
            &:nth-of-type(5) {
              grid-row-start: 1;
              grid-row-end: 3;
            }

            &:nth-of-type(3) {
              grid-row-start: 1;
              grid-row-end: 2;
            }

            &:nth-of-type(4) {
              grid-row-start: 2;
              grid-row-end: 3;
            }

            @include xs {
              &:nth-of-type(2),
              &:nth-of-type(3),
              &:nth-of-type(4),
              &:nth-of-type(5) {
                display: none;
              }
            }
          }
        }
      }
    }

    &__test {
      text-align: center;
      padding-top: $gutter * 2;
      padding-bottom: $gutter * 2;
      @include text($font-size--normal, $font-weight--regular);

      @include xs {
        @include text($font-size--small, $font-weight--regular);
      }

      ::v-deep span {
        color: $colors__primary;
        @include text($font-size--normal, $font-weight--bold);

        @include xs {
          @include text($font-size--small, $font-weight--bold);
        }
      }
    }
  }
</style>
