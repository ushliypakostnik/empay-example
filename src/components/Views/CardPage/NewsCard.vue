<template>
  <div class="card-news">
    <div class="card-news__image" />
    <div class="card-news__name">{{ post.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',

  props: {
    post: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_stylebase.scss";

$card-image__height--lg: 17.975vw;
$card-image__height--md: 18.17vw;
$card-image__height--sm: 28vw;
$card-image__height--xs: 55vw;

.card-news {
  @extend %test-card;

  &__image {
    max-height: 345px;
    margin-bottom: 14px;
    background: $colors__greys--test;
    width: 100%;

    @include lg {
      height: $card-image__height--lg;
    }

    @include md {
      height: $card-image__height--md;
    }

    @include sm {
      height: $card-image__height--sm;
    }

    @include xs {
      height: $card-image__height--xs;
    }
  }

  &__name {
    color: $colors__text;
    @include text($font-size--ssmall, $font-weight--semibold);
  }
}
</style>
