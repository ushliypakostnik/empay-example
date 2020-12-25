<template>
  <Layout class="card-page">
    <template #body>
      <div
        class="card-page__test"
        :class="{ 'card-page__test--hidden': !isTestVisible }"
      >
        <div
          v-if="isTestVisible"
          v-html="test"
          class="card-page__test-text"
        />
        <a
          href="#"
          @click.prevent="toggleTest"
        ><Close /></a>
      </div>

      <Subheader class="hidden--gadgets">
        <template #left>
          Дополнительный хедер:
          <a
            href="#"
            class="link"
          >Контролы</a>
        </template>

        <template #right>
          <SidebarMin
            isInSubheader
            v-show="isSidebarInSubheaderVisible"
            class="hidden--gadgets"
          >
            Сайдбар в хедере:
            <a
              href="#"
              class="link"
            >Контролы</a>
          </SidebarMin>
        </template>
      </Subheader>

      <SidebarMin class="visible--gadgets">
        <template #left>
          Сайдбар на гаджетах:
          <a
            href="#"
            class="link"
          >Контролы</a>
        </template>
      </SidebarMin>

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
          <div class="card-page__wrapper">
            <div class="card-page__content-wrapper">
              <div class="card-page__content">Content 1</div>
              <div class="card-page__test-block visible--lg">Content 2</div>
            </div>
            <div
              ref="cardPageSidebar"
              class="card-page__sidebar hidden--gadgets"
            >Sidebar</div>
          </div>
        </div>
      </section>

      <section class="card-page__section--7 hidden--lg">
        <div class="container">
          <div class="card-page__test-block">Content 2</div>
        </div>
      </section>

      <section class="card-page__section--8">
        <div class="container">
          <div class="section__header">
            <div class="section__header-left">
              <div class="section__title">Заголовок 1</div>
            </div>
            <div class="section__header-right">
              <div class="card-page__slider--1-prev link">Prev</div>
              <div class="card-page__slider--1-next link">Next</div>
            </div>
          </div>
        </div>
        <div class="container container--with-slider">
          <div
            v-swiper:mySwiper1="swiper1Option"
            class="card-page__slider--1"
          >
            <div class="swiper-wrapper">
              <div
                navigation
                class="swiper-slide"
                v-for="person in mock"
                :key="person.id"
              >
                <PersonCard :person="person" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="card-page__section--9">
        <div class="container">
          <div class="section__header">
            <div class="section__header-left">
              <div class="section__title">Заголовок 2</div>
            </div>
            <div class="section__header-right">
              <div class="card-page__slider--2-prev link">Prev</div>
              <div class="card-page__slider--2-next link">Next</div>
            </div>
          </div>
        </div>
        <div class="container container--with-slider">
          <div
            v-swiper:mySwiper2="swiper2Option"
            class="card-page__slider--2"
          >
            <div class="swiper-wrapper">
              <div
                navigation
                class="swiper-slide"
                v-for="friend in mock"
                :key="friend.id"
              >
                <FriendCard :friend="friend" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="card-page__section--10">
        <div class="container">
          <div class="card-page__test-block">Content 3</div>
        </div>
      </section>

      <section class="card-page__section--11">
        <div class="container">
          <div class="section__header">
            <div class="section__header-left">
              <div class="section__title">Заголовок 3</div>
            </div>
            <div class="section__header-right">
              <div class="card-page__slider--3-prev link">Prev</div>
              <div class="card-page__slider--3-next link">Next</div>
            </div>
          </div>
        </div>
        <div class="container container--with-slider">
          <div
            v-swiper:mySwiper3="swiper3Option"
            class="card-page__slider--3"
          >
            <div class="swiper-wrapper">
              <div
                navigation
                class="swiper-slide"
                v-for="post in mock"
                :key="post.id"
              >
                <NewsCard :post="post" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="card-page__section--12">
        <div class="container">
          <div class="section__header">
            <div class="section__header-left">
              <div class="section__title">Заголовок 4</div>
            </div>
            <div class="section__header-right">
              <div class="card-page__slider--4-prev link">Prev</div>
              <div class="card-page__slider--4-next link">Next</div>
            </div>
          </div>
        </div>
        <div class="container container--with-slider">
          <div
            v-swiper:mySwiper4="swiper4Option"
            class="card-page__slider--4"
          >
            <div class="swiper-wrapper">
              <div
                navigation
                class="swiper-slide"
                v-for="project in mock"
                :key="project.id"
              >
                <ProjectCard :project="project" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </Layout>
</template>

<script>
import ScreenHelper from '@/utils/screen-helper';

import Layout from '@/components/Layout/Layout.vue';
import Subheader from '@/components/Views/CardPage/Subheader.vue';
import SidebarMin from '@/components/Views/CardPage/SidebarMin.vue';
import PersonCard from '@/components/Views/CardPage/PersonCard.vue';
import FriendCard from '@/components/Views/CardPage/FriendCard.vue';
import NewsCard from '@/components/Views/CardPage/NewsCard.vue';
import ProjectCard from '@/components/Views/CardPage/ProjectCard.vue';
import Close from '@/components/Icons/Close.vue';

export default {
  name: 'CardPage',

  components: {
    Layout,
    Subheader,
    SidebarMin,
    PersonCard,
    FriendCard,
    NewsCard,
    ProjectCard,
    Close,
  },

  data() {
    return {
      test: null,
      isTestVisible: true,
      isSidebarInSubheaderVisible: null,
      mock: [
        { id: 1, name: 'Test 1' },
        { id: 2, name: 'Test 2' },
        { id: 3, name: 'Test 3' },
        { id: 4, name: 'Test 4' },
        { id: 5, name: 'Test 5' },
        { id: 6, name: 'Test 6' },
        { id: 7, name: 'Test 7' },
        { id: 8, name: 'Test 8' },
        { id: 9, name: 'Test 9' },
        { id: 10, name: 'Test 10' },
        { id: 11, name: 'Test 11' },
        { id: 12, name: 'Test 12' },
        { id: 13, name: 'Test 13' },
        { id: 14, name: 'Test 14' },
        { id: 15, name: 'Test 15' },
        { id: 16, name: 'Test 16' },
        { id: 17, name: 'Test 17' },
        { id: 18, name: 'Test 18' },
        { id: 19, name: 'Test 19' },
        { id: 20, name: 'Test 20' },
        { id: 21, name: 'Test 21' },
      ],
      swiper1Option: {
        breakpoints: {
          1777: {
            spaceBetween: 20,
            slidesPerView: 6,
          },
          1217: {
            spaceBetween: 16,
            slidesPerView: 5,
          },
          768: {
            spaceBetween: 12,
            slidesPerView: 2.8,
          },
          320: {
            spaceBetween: 12,
            slidesPerView: 2.5,
          },
        },
        navigation: {
          prevEl: '.card-page__slider--1-prev',
          nextEl: '.card-page__slider--1-next',
        },
      },
      swiper2Option: {
        breakpoints: {
          1777: {
            spaceBetween: 12,
            slidesPerView: 13,
          },
          1217: {
            spaceBetween: 12,
            slidesPerView: 9,
          },
          768: {
            spaceBetween: 6,
            slidesPerView: 6.9,
          },
          320: {
            spaceBetween: 8,
            slidesPerView: 4,
          },
        },
        navigation: {
          prevEl: '.card-page__slider--2-prev',
          nextEl: '.card-page__slider--2-next',
        },
      },
      swiper3Option: {
        breakpoints: {
          1777: {
            spaceBetween: 32,
            slidesPerView: 3,
          },
          1217: {
            spaceBetween: 28,
            slidesPerView: 3,
          },
          768: {
            spaceBetween: 24,
            slidesPerView: 2.3,
          },
          320: {
            spaceBetween: 12,
            slidesPerView: 1.25,
          },
        },
        navigation: {
          prevEl: '.card-page__slider--3-prev',
          nextEl: '.card-page__slider--3-next',
        },
      },
      swiper4Option: {
        breakpoints: {
          1777: {
            spaceBetween: 20,
            slidesPerView: 6,
          },
          1217: {
            spaceBetween: 16,
            slidesPerView: 5 ,
          },
          768: {
            spaceBetween: 12,
            slidesPerView: 3.3,
          },
          320: {
            spaceBetween: 6,
            slidesPerView: 2.4,
          },
        },
        navigation: {
          prevEl: '.card-page__slider--4-prev',
          nextEl: '.card-page__slider--4-next',
        },
      },
    };
  },

  mounted() {
    this.checkScrool();
    this.checkTest();
    window.addEventListener('scroll', () => this.checkScrool());
    window.addEventListener('resize', () => this.checkTest());
  },

  beforeDestroy() {
    window.removeEventListener('scroll', () => this.checkScrool());
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

    checkScrool() {
      if (this.$refs.cardPageSidebar) {
        const position = this.$refs.cardPageSidebar.getBoundingClientRect().bottom;

        if (position < 81) this.isSidebarInSubheaderVisible = true;
        else this.isSidebarInSubheaderVisible = false;
      }
    },

    toggleTest() {
      this.isTestVisible = !this.isTestVisible;
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
  @include gadgets {
    padding-bottom: $header__height;
  }

  &__wrapper {
    @include adaptive-grid('card-page');
  }

  &__content {
    @extend %test-block;
    @include text($font-size--large, $font-weight--bold);
    @include size(100%, 1740px);

    @include xs {
      @include text($font-size--normal, $font-weight--bold);
    }

    &-wrapper {
      .card-page__test-block {
        margin-top: $gutter2 * 2;

        @include not-lg {
          display: none !important;
        }
      }
    }
  }

  &__test-block {
    @extend %test-block;
    display: flex !important;
    @include size(100%, 232px);
    @include text($font-size--large, $font-weight--bold);

    @include xs {
      @include text($font-size--normal, $font-weight--bold);
    }
  }

  &__sidebar {
    @extend %test-block;
    position: sticky;
    top: $header__height + $gutter2 * 2;
    @include text($font-size--large, $font-weight--bold);
    @include size(100%, 522px);
    background: $colors__greys--test;

    @include xs {
      @include text($font-size--normal, $font-weight--bold);
    }
  }

  &__slider {
    &--1 {
      max-height: 404px;

      @include lg {
        height: 21.05vw;
      }

      @include md {
        height: 30.075vw;
      }

      @include sm {
        height: 55.5vw;
      }

      @include xs {
        height: 97.25vw;
      }
    }

    &--2 {
      max-height: 114px;
    }

    &--3 {
      max-height: 531px;

      @include lg {
        height: 27.67vw;
      }

      @include md {
        height: 37vw;
      }

      @include sm {
        height: 54.1vw;
      }

      @include xs {
        height: 116.6vw;
      }
    }

    &--4 {
      max-height: 446px;

      @include lg {
        height: 23.24vw;
      }

      @include md {
        height: 33.87vw;
      }

      @include sm {
        height: 55.75vw;
      }

      @include xs {
        height: 100.65vw;
      }
    }
  }

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
      padding-bottom: $gutter2 * 2;

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
          @extend %test-block;
          @include text($font-size--large, $font-weight--bold);

          @include xs {
            @include text($font-size--normal, $font-weight--bold);
          }

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

    &--7,
    &--8,
    &--9,
    &--10,
    &--11,
    &--12 {
      @extend %section__margin;
    }

    &--10 {
      .card-page__test-block {
        @include lg {
          max-width: 55%;
        }
      }
    }
  }

  &__test {
    z-index: $layouts__fixed + 500;
    background: rgba(125, 125, 125, 0.2);
    position: fixed;
    z-index: $layouts__fixed + 100;
    left: 20vw;
    right: 20vw;
    bottom: 44vh;
    text-align: center;
    padding: $gutter * 2;
    transition: all 0.5s ease-out;
    @include text($font-size--normal, $font-weight--regular);

    @include xs {
      bottom: 34vh;
      @include text($font-size--small, $font-weight--regular);
    }

    ::v-deep span {
      color: $colors__primary;
      @include text($font-size--normal, $font-weight--bold);

      @include xs {
        @include text($font-size--small, $font-weight--bold);
      }
    }

    a {
      position: absolute;
      top: $gutter / 4;
      right: $gutter / 4;
      display: inline-block;
      @include size(($gutter * 2), ($gutter * 2));
    }

    .icon {
      color: $colors__primary;
      @include size(($gutter * 2), ($gutter * 2));
    }

    &--hidden {
      left: auto;
      top: auto;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      @include size(($gutter2 * 2.5), ($gutter2 * 2.5));

      a {
        position: static;
      }
    }
  }
}
</style>
